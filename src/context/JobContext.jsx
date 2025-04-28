import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  getJobs, 
  getJobById, 
  createJob, 
  updateJob, 
  deleteJob,
  applyToJob, 
  getApplicationsByJob,
  getApplicationsByUser
} from '../services/jobService';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    category: '',
    jobType: '',
    salaryMin: '',
    salaryMax: '',
  });

  // Load jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [filters, jobs]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const fetchedJobs = await getJobs();
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  const fetchJobById = async (id) => {
    setLoading(true);
    try {
      const job = await getJobById(id);
      return job;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch job details');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const postJob = async (jobData) => {
    setLoading(true);
    try {
      const newJob = await createJob(jobData);
      setJobs([...jobs, newJob]);
      toast.success('Job posted successfully!');
      return newJob;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to post job');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editJob = async (id, jobData) => {
    setLoading(true);
    try {
      const updatedJob = await updateJob(id, jobData);
      setJobs(jobs.map(job => job.id === id ? updatedJob : job));
      toast.success('Job updated successfully!');
      return updatedJob;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to update job');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeJob = async (id) => {
    setLoading(true);
    try {
      await deleteJob(id);
      setJobs(jobs.filter(job => job.id !== id));
      toast.success('Job deleted successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to delete job');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const apply = async (jobId, applicationData) => {
    setLoading(true);
    try {
      const application = await applyToJob(jobId, applicationData);
      toast.success('Application submitted successfully!');
      return application;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to submit application');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchApplicationsByJob = async (jobId) => {
    setLoading(true);
    try {
      const jobApplications = await getApplicationsByJob(jobId);
      setApplications(jobApplications);
      return jobApplications;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch applications');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchApplicationsByUser = async (userId) => {
    setLoading(true);
    try {
      const userApplications = await getApplicationsByUser(userId);
      setApplications(userApplications);
      return userApplications;
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch applications');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const applyFilters = () => {
    let result = [...jobs];
    
    // Apply search filter
    if (filters.search) {
      const searchTerms = filters.search.toLowerCase().split(' ');
      result = result.filter(job => {
        return searchTerms.some(term => 
          job.title.toLowerCase().includes(term) || 
          job.company.toLowerCase().includes(term) || 
          job.description.toLowerCase().includes(term)
        );
      });
    }
    
    // Apply location filter
    if (filters.location) {
      result = result.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filters.category) {
      result = result.filter(job => job.category === filters.category);
    }
    
    // Apply job type filter
    if (filters.jobType) {
      result = result.filter(job => job.type === filters.jobType);
    }
    
    // Apply salary filters
    if (filters.salaryMin) {
      result = result.filter(job => job.salary >= parseInt(filters.salaryMin));
    }
    
    if (filters.salaryMax) {
      result = result.filter(job => job.salary <= parseInt(filters.salaryMax));
    }
    
    setFilteredJobs(result);
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      location: '',
      category: '',
      jobType: '',
      salaryMin: '',
      salaryMax: '',
    });
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        applications,
        loading,
        error,
        filters,
        fetchJobs,
        fetchJobById,
        postJob,
        editJob,
        removeJob,
        apply,
        fetchApplicationsByJob,
        fetchApplicationsByUser,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};