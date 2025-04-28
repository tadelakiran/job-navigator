import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="card group hover:translate-y-[-4px] transition-all duration-300">
      <Link to={`/jobs/${job.id}`} className="block p-6">
        <div className="flex items-start justify-between">
          <div className="flex">
            <div className="h-12 w-12 rounded-md bg-primary-100 flex items-center justify-center mr-4">
              <Briefcase className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job.company}
              </p>
            </div>
          </div>
          <div>
            <span className={`badge ${job.featured ? 'badge-accent' : job.type === 'Full-time' ? 'badge-primary' : job.type === 'Part-time' ? 'badge-secondary' : 'badge-success'}`}>
              {job.featured ? 'Featured' : job.type}
            </span>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{job.salary ? `$${job.salary.toLocaleString()} / year` : 'Salary not specified'}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600 line-clamp-2">
            {job.description}
          </p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default JobCard;