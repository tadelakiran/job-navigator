import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Menu, X, ChevronDown, Briefcase, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { currentUser, logout, isEmployer, isAdmin, isJobSeeker } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-800">JobPortal</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link 
                to="/jobs" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition-all"
              >
                Find Jobs
              </Link>
              
              {isEmployer() && (
                <Link 
                  to="/post-job" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition-all"
                >
                  Post a Job
                </Link>
              )}
              
              {isEmployer() && (
                <Link 
                  to="/employer" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition-all"
                >
                  Manage Jobs
                </Link>
              )}
              
              {isAdmin() && (
                <Link 
                  to="/admin" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition-all"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
          
          {/* User menu */}
          <div className="hidden md:flex items-center">
            {currentUser ? (
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center max-w-xs bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="ml-2 text-gray-700">{currentUser.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                  </button>
                </div>
                
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </div>
                    </Link>
                    
                    {isJobSeeker() && (
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4" />
                          My Applications
                        </div>
                      </Link>
                    )}
                    
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="btn btn-outline">
                  Sign in
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/jobs" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Find Jobs
            </Link>
            
            {isEmployer() && (
              <Link 
                to="/post-job" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Post a Job
              </Link>
            )}
            
            {isEmployer() && (
              <Link 
                to="/employer" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Manage Jobs
              </Link>
            )}
            
            {isAdmin() && (
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Admin Panel
              </Link>
            )}
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            {currentUser ? (
              <>
                <div className="flex items-center px-4">
                  <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{currentUser.name}</div>
                    <div className="text-sm font-medium text-gray-500">{currentUser.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Profile
                    </div>
                  </Link>
                  
                  {isJobSeeker() && (
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        My Applications
                      </div>
                    </Link>
                  )}
                  
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-left block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-2 h-5 w-5" />
                      Sign out
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-4">
                <Link 
                  to="/login" 
                  className="w-full btn btn-outline"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
                <Link 
                  to="/register" 
                  className="w-full btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;