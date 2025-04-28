import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Users, Building, Clock, Sparkles } from 'lucide-react';
import JobSearch from '../components/jobs/JobSearch';

const Home = () => {
  const categories = [
    { name: 'Technology', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 240 },
    { name: 'Healthcare', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 158 },
    { name: 'Education', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 112 },
    { name: 'Finance', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 95 },
    { name: 'Marketing', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 87 },
    { name: 'Sales', icon: <Briefcase className="h-8 w-8 text-primary-600" />, count: 76 },
  ];

  const companies = [
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary-600" />,
      title: 'Easy Job Search',
      description: 'Find the perfect job with our powerful search and filtering tools.',
    },
    {
      icon: <Building className="h-10 w-10 text-primary-600" />,
      title: 'Top Companies',
      description: 'Connect with industry-leading companies looking for talent like you.',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: 'Quick Apply',
      description: 'Apply to multiple jobs with just a few clicks using your saved profile.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary-600" />,
      title: 'Career Growth',
      description: 'Discover opportunities that align with your career goals and aspirations.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Find Your Dream Job Today
              </h1>
              <p className="text-xl max-w-lg">
                Connect with thousands of employers and find the perfect job that matches your skills and career goals.
              </p>
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <JobSearch />
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="People working together" 
                className="rounded-lg shadow-xl max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-3xl"></div>
      </div>

      {/* Job Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Job Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore job opportunities across various industries and find your perfect match
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={`/jobs?category=${category.name}`} 
              key={index} 
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="bg-primary-50 p-4 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500 mb-3">
                  {category.count} open positions
                </p>
                <span className="text-primary-600 font-medium mt-auto group-hover:underline">
                  Browse Jobs
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Companies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top companies use JobPortal to find amazing talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {companies.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={image} 
                      alt={`Featured company ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {['Google', 'Amazon', 'Microsoft', 'Apple'][index]}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{['Mountain View, CA', 'Seattle, WA', 'Redmond, WA', 'Cupertino, CA'][index]}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {[
                        'Leading technology company specializing in internet-related services and products.',
                        'Global e-commerce and cloud computing company.',
                        'Multinational technology company that develops software, consumer electronics, and more.',
                        'Technology company that designs consumer electronics, software, and online services.'
                      ][index]}
                    </p>
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600 font-medium">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">{12 + index * 3}</span> open positions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/jobs" className="btn btn-primary px-8 py-3">
              View All Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JobPortal</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best tools and resources to help you find your dream job
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-primary-50 p-4 inline-block rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Job Search?</h2>
              <p className="text-xl mb-8 text-primary-100">
                Create an account today and start exploring thousands of job opportunities.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white px-8 py-3">
                  Sign Up Now
                </Link>
                <Link to="/jobs" className="btn border border-white text-white hover:bg-primary-600 focus:ring-white px-8 py-3">
                  Browse Jobs
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-lg p-6 shadow-lg text-gray-900 max-w-md">
                <div className="flex items-center mb-6">
                  <Users className="h-10 w-10 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Join Our Community</h3>
                    <p className="text-gray-600">Connect with millions of job seekers</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <Briefcase className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-medium">10,000+ Job Listings</p>
                      <p className="text-sm text-gray-500">Updated daily with fresh opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <Building className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-medium">500+ Top Companies</p>
                      <p className="text-sm text-gray-500">Hiring across various industries</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <Users className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-medium">2M+ Active Users</p>
                      <p className="text-sm text-gray-500">Building their careers with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;