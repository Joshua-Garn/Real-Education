import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Target,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  Shield,
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Students Enrolled', value: '5,000+', icon: Users },
    { label: 'Course Modules', value: '15+', icon: BookOpen },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
    { label: 'Countries', value: '25+', icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in real estate education, ensuring our content is accurate, current, and practical.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of learners and professionals who help each other succeed in real estate.',
    },
    {
      icon: Award,
      title: 'Success',
      description: 'Our success is measured by your success. We\'re committed to helping you achieve your real estate goals.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Built on trust and transparency, we provide reliable education backed by industry expertise.',
    },
  ];

  const curriculum = [
    {
      module: 'Real Estate Law & Regulations',
      description: 'Understanding legal frameworks, contracts, and compliance requirements',
      lessons: 12,
      duration: '3 hours',
    },
    {
      module: 'Property Valuation & Appraisal',
      description: 'Methods for accurate property assessment and market value determination',
      lessons: 15,
      duration: '4 hours',
    },
    {
      module: 'Market Analysis & Research',
      description: 'Comprehensive market research techniques and trend analysis',
      lessons: 18,
      duration: '5 hours',
    },
    {
      module: 'Investment Strategies',
      description: 'Advanced investment approaches for residential and commercial properties',
      lessons: 14,
      duration: '4 hours',
    },
    {
      module: 'Property Management',
      description: 'Effective management strategies for rental and commercial properties',
      lessons: 10,
      duration: '3 hours',
    },
    {
      module: 'Real Estate Finance',
      description: 'Financing options, mortgages, and financial analysis for real estate',
      lessons: 16,
      duration: '4.5 hours',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Real Education - Professional Real Estate Training</title>
        <meta
          name="description"
          content="Learn about Real Education's comprehensive real estate training programs. Discover our mission, curriculum, and commitment to student success in property investment and management."
        />
        <meta name="keywords" content="real estate training, property education, real estate curriculum, professional development" />
      </Helmet>

      <div className="min-h-screen bg-grey-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About Real Education
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Transforming real estate education with comprehensive, practical courses
                designed by industry experts for aspiring and experienced professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Real Education exists to democratize access to high-quality real estate education.
                  We believe that everyone should have the opportunity to learn from the best,
                  regardless of their location or background.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive curriculum combines theoretical knowledge with practical
                  application, ensuring our students are prepared for real-world challenges
                  in the dynamic real estate market.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-800 font-medium">Industry-leading curriculum</span>
                </div>
                <div className="flex items-center space-x-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-800 font-medium">Expert instructor network</span>
                </div>
                <div className="flex items-center space-x-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-800 font-medium">Flexible learning platform</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at Real Education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Curriculum
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our carefully designed course modules cover every aspect of real estate
                from fundamentals to advanced investment strategies
              </p>
            </div>

            <div className="space-y-6">
              {curriculum.map((course, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.module}
                      </h3>
                      <p className="text-gray-600 mb-4 lg:mb-0">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start your real estate education journey in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up</h3>
                <p className="text-gray-600">
                  Create your account and get instant access to all course materials.
                  Start learning immediately with our comprehensive curriculum.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn & Practice</h3>
                <p className="text-gray-600">
                  Access our comprehensive curriculum, complete interactive lessons,
                  and get personalized guidance from our AI assistant.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply & Succeed</h3>
                <p className="text-gray-600">
                  Apply your new knowledge in real-world scenarios and advance your
                  real estate career with confidence and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Real Estate Knowledge?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of successful real estate professionals and start building
              your expertise today.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 hover-lift"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;