import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Sign up function
  const signup = async (email, password, name) => {
    try {
      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's profile with their name
      await updateProfile(user, {
        displayName: name,
      });

      // Create user document in Firestore
      const userDoc = {
        uid: user.uid,
        email: user.email,
        displayName: name,
        hasAccess: true,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        coursesCompleted: [],
        currentProgress: {},
      };

      await setDoc(doc(db, 'users', user.uid), userDoc);
      setUserProfile(userDoc);

      return { user, profile: userDoc };
    } catch (error) {
      console.error('Signup error:', error);
      throw new Error(getFirebaseErrorMessage(error.code));
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // Update last login time
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        lastLoginAt: new Date().toISOString(),
      });

      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error(getFirebaseErrorMessage(error.code));
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
      setUserProfile(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Failed to log out');
    }
  };

  // Reset password function
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Password reset error:', error);
      throw new Error(getFirebaseErrorMessage(error.code));
    }
  };

  // Update course progress
  const updateCourseProgress = async (courseId, progress) => {
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    try {
      const userRef = doc(db, 'users', currentUser.uid);
      const updateData = {
        [`currentProgress.${courseId}`]: progress,
      };

      await updateDoc(userRef, updateData);

      // Update local state
      setUserProfile(prev => ({
        ...prev,
        currentProgress: {
          ...prev.currentProgress,
          [courseId]: progress,
        },
      }));
    } catch (error) {
      console.error('Course progress update error:', error);
      throw new Error('Failed to update course progress');
    }
  };

  // Get user profile from Firestore
  const getUserProfile = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        return userDoc.data();
      }
      return null;
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  };

  // Firebase error message mapping
  const getFirebaseErrorMessage = (errorCode) => {
    const errorMessages = {
      'auth/email-already-in-use': 'This email is already registered. Please use a different email or try logging in.',
      'auth/weak-password': 'Password should be at least 6 characters long.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/user-not-found': 'No account found with this email. Please check your email or sign up.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/too-many-requests': 'Too many failed login attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection and try again.',
      'auth/invalid-credential': 'Invalid email or password. Please check your credentials.',
    };

    return errorMessages[errorCode] || 'An unexpected error occurred. Please try again.';
  };

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);

        // Get user profile from Firestore
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        // User is signed out
        setCurrentUser(null);
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    updateCourseProgress,
    getUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};