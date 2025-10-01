// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'Email is required';
  }

  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }

  return null;
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters long';
  }

  if (password.length > 128) {
    return 'Password must be less than 128 characters';
  }

  // Check for at least one number
  if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  }

  // Check for at least one letter
  if (!/[a-zA-Z]/.test(password)) {
    return 'Password must contain at least one letter';
  }

  return null;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return 'Please confirm your password';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  return null;
};

export const validateName = (name) => {
  if (!name) {
    return 'Name is required';
  }

  if (name.length < 2) {
    return 'Name must be at least 2 characters long';
  }

  if (name.length > 50) {
    return 'Name must be less than 50 characters';
  }

  // Allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  }

  return null;
};

// Utility function to validate all form fields
export const validateForm = (formData, validationRules) => {
  const errors = {};

  for (const field in validationRules) {
    const value = formData[field];
    const rules = validationRules[field];

    for (const rule of rules) {
      const error = rule(value, formData);
      if (error) {
        errors[field] = error;
        break; // Stop at first error for each field
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Common validation rule sets
export const signupValidationRules = {
  name: [validateName],
  email: [validateEmail],
  password: [validatePassword],
  confirmPassword: [(value, formData) => validateConfirmPassword(formData.password, value)],
};

export const loginValidationRules = {
  email: [validateEmail],
  password: [(password) => password ? null : 'Password is required'],
};