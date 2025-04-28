import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobContext } from '../../context/JobContext';
import { Search, MapPin } from 'lucide-react';

const JobSearch = () => {
  const { updateFilters } = useContext(JobContext);
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    updateFilters({
      search: searchTerm,
      location: location
    });
    
    navigate('/jobs');
  };
  
  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
      <div className="relative flex-1 mb-2 sm:mb-0 sm:mr-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="form-input pl-10 py-3 w-full"
          placeholder="Job title, keywords, or company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="relative flex-1 mb-2 sm:mb-0 sm:mr-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="form-input pl-10 py-3 w-full"
          placeholder="City, state, or remote"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <button
        type="submit"
        className="btn btn-primary py-3 px-6 whitespace-nowrap"
      >
        Search Jobs
      </button>
    </form>
  );
};

export default JobSearch;