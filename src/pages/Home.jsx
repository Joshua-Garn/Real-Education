import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  Home as HomeIcon,
  FileText,
  BarChart3,
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Master real estate fundamentals with our expertly crafted courses covering law, finance, and market analysis.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with decades of experience in residential and commercial real estate.',
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Prepare for real estate licensing exams and advance your career with industry-recognized knowledge.',
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay ahead with current market trends, investment strategies, and emerging opportunities.',
    },
  ];

  const courseModules = [
    'Real Estate Law & Regulations',
    'Property Valuation & Appraisal',
    'Market Analysis & Investment',
    'Property Management',
    'Real Estate Finance',
    'Commercial Real Estate',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Agent',
      content: 'This course transformed my understanding of property valuation. The practical examples were incredibly helpful.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'The investment strategies module gave me the confidence to make my first commercial property purchase.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'Excellent content and presentation. I passed my licensing exam on the first try thanks to this course.',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Real Education - Professional Real Estate Courses Online</title>
        <meta
          name="description"
          content="Master real estate with comprehensive online courses. Learn property valuation, market analysis, real estate law, and investment strategies from industry experts."
        />
        <meta name="keywords" content="real estate education, property valuation, real estate courses, investment strategies, real estate license" />
      </Helmet>

      <div className="min-h-screen bg-grey-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Master Real Estate
                  <span className="text-blue-300 block">Education</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Advance your career with comprehensive online courses designed by industry experts.
                  Learn property valuation, market analysis, and investment strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 hover-lift"
                  >
                    <span>Start Learning Today</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="lg:text-right animate-slide-in-right">
                <div className="inline-block bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-900">10+</div>
                      <div className="text-blue-800">Course Modules</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-900">5000+</div>
                      <div className="text-blue-800">Students</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-900">98%</div>
                      <div className="text-blue-800">Pass Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-900">24/7</div>
                      <div className="text-blue-800">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Real Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform combines expert knowledge, practical application,
                and cutting-edge technology to deliver the best real estate education experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Complete Real Estate Curriculum
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our structured learning path covers everything you need to succeed in real estate,
                  from fundamental concepts to advanced investment strategies.
                </p>

                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{module}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>Learn more about our curriculum</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Real Estate Law</div>
                      <div className="text-sm text-gray-500">12 lessons • 3 hours</div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <HomeIcon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Property Valuation</div>
                      <div className="text-sm text-gray-500">15 lessons • 4 hours</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Market Analysis</div>
                      <div className="text-sm text-gray-500">18 lessons • 5 hours</div>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Hear from our graduates who transformed their real estate careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful real estate professionals who started their journey with Real Education.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 hover-lift"
            >
              <span>Get Started Now</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;