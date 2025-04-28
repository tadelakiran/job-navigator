import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center">
          <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        
        <h1 className="mt-6 text-3xl font-bold text-gray-900">404 - Page Not Found</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <div className="mt-10 space-y-3">
          <Link
            to="/"
            className="w-full btn btn-primary flex items-center justify-center"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link
            to="/jobs"
            className="w-full btn btn-outline flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;