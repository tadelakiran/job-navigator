import React, { useContext, useState } from 'react';
import { JobContext } from '../../context/JobContext';
import { X, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const JobFilter = () => {
  const { filters, updateFilters, clearFilters } = useContext(JobContext);
  
  const [isOpen, setIsOpen] = useState(false);
  
  const jobCategories = [
    'Technology',
    'Healthcare',
    'Education',
    'Finance',
    'Marketing',
    'Sales',
    'Design',
    'Customer Service',
    'Administrative',
    'Engineering',
  ];
  
  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Internship',
    'Remote',
  ];
  
  const handleCategoryChange = (e) => {
    updateFilters({ category: e.target.value });
  };
  
  const handleJobTypeChange = (e) => {
    updateFilters({ jobType: e.target.value });
  };
  
  const handleSalaryMinChange = (e) => {
    updateFilters({ salaryMin: e.target.value });
  };
  
  const handleSalaryMaxChange = (e) => {
    updateFilters({ salaryMax: e.target.value });
  };
  
  const handleClear = () => {
    clearFilters();
  };
  
  const toggleMobileFilters = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Mobile Filter Toggle */}
      <div className="p-4 sm:hidden border-b border-gray-200">
        <button 
          onClick={toggleMobileFilters}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-md border border-gray-200"
        >
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="font-medium">Filters</span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            <button 
              onClick={handleClear}
              className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </button>
          </div>
          
          {/* Job Category Filter */}
          <div className="mb-6">
            <label htmlFor="category" className="form-label">
              Job Category
            </label>
            <select
              id="category"
              className="form-input"
              value={filters.category}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {jobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          {/* Job Type Filter */}
          <div className="mb-6">
            <label htmlFor="jobType" className="form-label">
              Job Type
            </label>
            <select
              id="jobType"
              className="form-input"
              value={filters.jobType}
              onChange={handleJobTypeChange}
            >
              <option value="">All Types</option>
              {jobTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          {/* Salary Range Filter */}
          <div className="mb-6">
            <label className="form-label">Salary Range</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  placeholder="Min"
                  className="form-input"
                  value={filters.salaryMin}
                  onChange={handleSalaryMinChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Max"
                  className="form-input"
                  value={filters.salaryMax}
                  onChange={handleSalaryMaxChange}
                />
              </div>
            </div>
          </div>
          
          {/* Apply Filters Button (Mobile Only) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full btn btn-primary py-2"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;