import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import JobSearch from '../components/jobs/JobSearch';
import JobFilter from '../components/jobs/JobFilter';
import JobCard from '../components/jobs/JobCard';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  const { filteredJobs, loading, updateFilters, filters, fetchJobs } = useContext(JobContext);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    // Get URL parameters
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const search = searchParams.get('search');
    
    // Apply filters from URL parameters
    if (category || location || search) {
      updateFilters({
        category: category || '',
        location: location || '',
        search: search || '',
      });
    }
    
    fetchJobs();
  }, [searchParams]);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Job</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Browse thousands of job opportunities across multiple industries and locations
        </p>
      </div>
      
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-8 p-4">
        <JobSearch />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <JobFilter />
        </div>
        
        <div className="lg:col-span-3">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <p className="text-gray-700">
                {loading ? (
                  'Searching for jobs...'
                ) : (
                  <>
                    Showing <span className="font-medium">{filteredJobs.length}</span> results
                    {(filters.search || filters.location || filters.category || filters.jobType) && (
                      <span> based on your filters</span>
                    )}
                  </>
                )}
              </p>
            </div>
            <div>
              <select className="form-input py-2">
                <option>Most Relevant</option>
                <option>Newest</option>
                <option>Highest Salary</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any jobs that match your current filters.
              </p>
              <button 
                onClick={() => updateFilters({
                  search: '',
                  location: '',
                  category: '',
                  jobType: '',
                  salaryMin: '',
                  salaryMax: '',
                })}
                className="btn btn-outline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;