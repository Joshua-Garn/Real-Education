import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageLoader } from '../components/Loader';

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get success message from navigation state
  const successMessage = location.state?.message;

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate('/signup');
    }
  }, [currentUser, loading, navigate]);


  // Show welcome message
  useEffect(() => {
    if (successMessage) {
      setShowWelcomeMessage(true);
      // Clear success message from browser history
      window.history.replaceState({}, document.title);
    }
  }, [successMessage]);

  const courseModules = [
    {
      id: 'real-estate-law',
      title: 'Real Estate Law & Regulations',
      description: 'Understanding legal frameworks, contracts, and compliance requirements',
      lessons: 12,
      duration: '3 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Beginner',
    },
    {
      id: 'property-valuation',
      title: 'Property Valuation & Appraisal',
      description: 'Methods for accurate property assessment and market value determination',
      lessons: 15,
      duration: '4 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Intermediate',
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis & Research',
      description: 'Comprehensive market research techniques and trend analysis',
      lessons: 18,
      duration: '5 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Intermediate',
    },
    {
      id: 'investment-strategies',
      title: 'Investment Strategies',
      description: 'Advanced investment approaches for residential and commercial properties',
      lessons: 14,
      duration: '4 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Advanced',
    },
    {
      id: 'property-management',
      title: 'Property Management',
      description: 'Effective management strategies for rental and commercial properties',
      lessons: 10,
      duration: '3 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Intermediate',
    },
    {
      id: 'real-estate-finance',
      title: 'Real Estate Finance',
      description: 'Financing options, mortgages, and financial analysis for real estate',
      lessons: 16,
      duration: '4.5 hours',
      progress: 0,
      status: 'not-started',
      difficulty: 'Advanced',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const completedModules = 0;
  const totalProgress = 0;

  if (loading) {
    return <PageLoader text="Loading your dashboard..." />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - Real Education</title>
        <meta name="description" content="Your Real Education dashboard. Track your progress and access all course materials." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        {/* Welcome Message */}
        {showWelcomeMessage && successMessage && (
          <div className="bg-green-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <p className="text-sm font-medium">{successMessage}</p>
                </div>
                <button
                  onClick={() => setShowWelcomeMessage(false)}
                  className="text-green-200 hover:text-white"
                >
                  <span className="sr-only">Dismiss</span>
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {currentUser?.displayName || 'Student'}!
              </h1>
              <p className="text-gray-600 mt-1">
                Continue your real estate education journey
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Modules</p>
                  <p className="text-2xl font-semibold text-gray-900">{courseModules.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-semibold text-gray-900">{completedModules}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-semibold text-gray-900">{Math.round(totalProgress)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Certificates</p>
                  <p className="text-2xl font-semibold text-gray-900">{completedModules}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {/* Course Modules */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Course Modules</h2>
                </div>

                <div className="space-y-4">
                  {courseModules.map((module) => (
                    <div
                      key={module.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                      onClick={() => setSelectedModule(module.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{module.title}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                              {module.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                              {module.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
                              {module.status === 'not-started' && <Play className="w-3 h-3 mr-1" />}
                              {module.status.replace('-', ' ')}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {module.lessons} lessons
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </span>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                              {module.difficulty}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex flex-col items-center">
                          <div className="w-16 h-16 relative">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className="stroke-current text-gray-200"
                                strokeWidth="3"
                              />
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className={`stroke-current ${
                                  module.status === 'completed' ? 'text-green-500' :
                                  module.status === 'in-progress' ? 'text-blue-500' : 'text-gray-300'
                                }`}
                                strokeWidth="3"
                                strokeDasharray={`${module.progress}, 100`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-semibold text-gray-700">
                                {module.progress}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;