import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { JobContext } from '../context/JobContext';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  Building, 
  Users, 
  Globe, 
  Share2, 
  Bookmark, 
  FileText, 
  Upload
} from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser, isJobSeeker } = useContext(AuthContext);
  const { fetchJobById, apply } = useContext(JobContext);
  
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [application, setApplication] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    coverLetter: '',
    resume: null,
    resumeUrl: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  
  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const jobData = await fetchJobById(id);
        setJob(jobData);
        
        // Check if user has already applied
        if (currentUser) {
          setHasApplied(jobData.applications.some(app => 
            app.userId === currentUser.id
          ));
        }
      } catch (err) {
        setError('Failed to load job details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    getJobDetails();
  }, [id, currentUser]);
  
  const handleApply = () => {
    if (!currentUser) {
      navigate('/login', { state: { from: `/jobs/${id}` } });
      return;
    }
    
    setShowApplicationForm(true);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplication({
        ...application,
        resume: file,
        resumeUrl: URL.createObjectURL(file),
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      navigate('/login', { state: { from: `/jobs/${id}` } });
      return;
    }
    
    setSubmitting(true);
    
    try {
      await apply(id, {
        ...application,
        userId: currentUser.id,
      });
      
      setHasApplied(true);
      setShowApplicationForm(false);
    } catch (err) {
      setError('Failed to submit application');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error || !job) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900">Job not found</h2>
        <p className="mt-2 text-gray-600">{error || "We couldn't find the job you're looking for."}</p>
        <button 
          onClick={() => navigate('/jobs')}
          className="mt-6 btn btn-primary"
        >
          View All Jobs
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Job Header */}
          <div className="relative bg-primary-600 text-white py-8 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="h-20 w-20 bg-white rounded-lg flex items-center justify-center">
                    <Briefcase className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`badge ${job.featured ? 'badge-accent' : job.type === 'Full-time' ? 'badge-primary' : job.type === 'Part-time' ? 'badge-secondary' : 'badge-success'}`}>
                      {job.featured ? 'Featured' : job.type}
                    </span>
                    {job.urgent && (
                      <span className="badge badge-error">Urgent</span>
                    )}
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                  
                  <div className="mt-2 flex flex-wrap items-center text-sm md:text-base gap-x-4 gap-y-2">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4">
                  <button 
                    className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
                    onClick={() => window.location.href = `mailto:?subject=Job: ${job.title} at ${job.company}&body=Check out this job opportunity: ${window.location.href}`}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>
                  
                  <button className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto py-8 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-4">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Salary</div>
                      <div className="flex items-center text-lg font-medium text-gray-900">
                        <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
                        {job.salary ? `$${job.salary.toLocaleString()} / year` : 'Not specified'}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Job Type</div>
                      <div className="flex items-center font-medium text-gray-900">
                        <Clock className="h-5 w-5 text-gray-400 mr-1" />
                        {job.type}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Experience</div>
                      <div className="flex items-center font-medium text-gray-900">
                        <Briefcase className="h-5 w-5 text-gray-400 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Company Size</div>
                      <div className="flex items-center font-medium text-gray-900">
                        <Users className="h-5 w-5 text-gray-400 mr-1" />
                        {job.companySize}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Company Website</div>
                      <div className="flex items-center font-medium text-gray-900">
                        <Globe className="h-5 w-5 text-gray-400 mr-1" />
                        <a 
                          href={job.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      {hasApplied ? (
                        <div className="text-center">
                          <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-4">
                            <p className="font-medium">Application Submitted</p>
                            <p className="text-sm mt-1">You have already applied for this job.</p>
                          </div>
                          <button className="btn btn-outline w-full">
                            View Application
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={handleApply}
                          className="btn btn-primary w-full"
                          disabled={!isJobSeeker()}
                        >
                          Apply for this Job
                        </button>
                      )}
                      
                      {!isJobSeeker() && currentUser && (
                        <p className="text-sm text-center mt-2 text-red-500">
                          Only job seekers can apply for jobs
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Jobs */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {job.similarJobs.map((similarJob) => (
              <div key={similarJob.id} className="card group hover:translate-y-[-4px]">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="h-12 w-12 rounded-md bg-primary-100 flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                        {similarJob.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {similarJob.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{similarJob.location}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/jobs/${similarJob.id}`)}
                    className="btn btn-outline btn-sm w-full"
                  >
                    View Job
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h2>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={application.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={application.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={application.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="form-label">Resume</label>
                    <div className="mt-1 flex items-center">
                      <label className="block w-full">
                        <span className="sr-only">Choose file</span>
                        <input 
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-medium
                            file:bg-primary-50 file:text-primary-700
                            hover:file:bg-primary-100
                          "
                          required
                        />
                      </label>
                    </div>
                    {application.resumeUrl && (
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FileText className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Resume uploaded successfully</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={5}
                      value={application.coverLetter}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Why are you a good fit for this position?"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-end gap-x-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;