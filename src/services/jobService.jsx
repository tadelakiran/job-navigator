// Array to store job data
let jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    employerId: '2',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Technology',
    salary: 110000,
    experience: '2-5 years',
    postedDate: '2023-05-15T10:30:00Z',
    description: 'We are looking for a talented Frontend Developer with experience in React and modern JavaScript frameworks to join our growing team.',
    requirements: [
      'Proficient in React, Redux, and modern JavaScript (ES6+)',
      'Experience with responsive web design and CSS preprocessors',
      'Knowledge of testing frameworks like Jest and React Testing Library',
      'Familiarity with version control systems (Git)',
      'Excellent problem-solving skills and attention to detail'
    ],
    responsibilities: [
      'Develop and maintain responsive user interfaces for web applications',
      'Collaborate with designers and backend developers',
      'Optimize applications for maximum performance and scalability',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and contribute to team knowledge sharing'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible working hours and remote options',
      '401(k) matching program',
      'Professional development budget'
    ],
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Git'],
    applications: [],
    companySize: '50-200 employees',
    website: 'https://example.com',
    featured: true,
    urgent: false,
    similarJobs: [
      {
        id: '3',
        title: 'Frontend Engineer',
        company: 'SoftTech Solutions',
        location: 'Remote',
      },
      {
        id: '5',
        title: 'React Developer',
        company: 'WebApp Inc',
        location: 'New York, NY',
      },
      {
        id: '8',
        title: 'UI Developer',
        company: 'Design Masters',
        location: 'Austin, TX',
      }
    ]
  },
  {
    id: '2',
    title: 'Senior Backend Engineer',
    company: 'Tech Innovators',
    employerId: '2',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Technology',
    salary: 140000,
    experience: '5+ years',
    postedDate: '2023-05-10T08:15:00Z',
    description: 'Join our backend team to develop scalable and efficient server-side applications. You\'ll be working with Node.js and MongoDB to power our growing platform.',
    requirements: [
      'Strong experience with Node.js and Express',
      'Proficient in MongoDB and database design',
      'Experience with RESTful APIs and GraphQL',
      'Knowledge of Docker and containerization',
      'Understanding of CI/CD pipelines'
    ],
    responsibilities: [
      'Design and implement backend services and APIs',
      'Optimize database queries and performance',
      'Implement security and data protection measures',
      'Collaborate with frontend developers to integrate user-facing elements',
      'Write automated tests for backend systems'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible working hours and remote options',
      '401(k) matching program',
      'Professional development budget'
    ],
    skills: ['Node.js', 'MongoDB', 'Express', 'Docker', 'REST API', 'GraphQL'],
    applications: [],
    companySize: '50-200 employees',
    website: 'https://example.com',
    featured: true,
    urgent: true,
    similarJobs: [
      {
        id: '4',
        title: 'Backend Developer',
        company: 'Data Systems',
        location: 'Seattle, WA',
      },
      {
        id: '6',
        title: 'Node.js Developer',
        company: 'ServerPro',
        location: 'Remote',
      },
      {
        id: '9',
        title: 'Full Stack Engineer',
        company: 'TechFlow',
        location: 'Chicago, IL',
      }
    ]
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'SoftTech Solutions',
    employerId: '4',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    salary: 105000,
    experience: '2+ years',
    postedDate: '2023-05-18T14:20:00Z',
    description: 'SoftTech Solutions is seeking a Frontend Engineer to join our remote team. You will be responsible for building and maintaining user interfaces for our enterprise applications.',
    requirements: [
      'Strong foundation in JavaScript, HTML, and CSS',
      'Experience with modern frontend frameworks (React, Angular, or Vue)',
      'Familiarity with responsive design principles',
      'Knowledge of state management solutions',
      'Good understanding of cross-browser compatibility issues'
    ],
    responsibilities: [
      'Implement responsive user interfaces based on design specifications',
      'Ensure cross-browser compatibility and accessibility',
      'Optimize frontend performance',
      'Collaborate with UX/UI designers and backend engineers',
      'Write and maintain documentation'
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Health insurance',
      'Paid time off',
      'Learning and development stipend'
    ],
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Responsive Design'],
    applications: [],
    companySize: '20-50 employees',
    website: 'https://example-softtech.com',
    featured: false,
    urgent: false,
    similarJobs: [
      {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '5',
        title: 'React Developer',
        company: 'WebApp Inc',
        location: 'New York, NY',
      }
    ]
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'Data Systems',
    employerId: '5',
    location: 'Seattle, WA',
    type: 'Full-time',
    category: 'Technology',
    salary: 125000,
    experience: '3-6 years',
    postedDate: '2023-05-12T09:45:00Z',
    description: 'Data Systems is looking for a skilled Backend Developer to design and implement server-side logic for our data processing platform.',
    requirements: [
      'Strong knowledge of Python or Java',
      'Experience with SQL and NoSQL databases',
      'Understanding of RESTful API design',
      'Knowledge of microservices architecture',
      'Familiarity with cloud services (AWS, GCP)'
    ],
    responsibilities: [
      'Develop and maintain server-side applications',
      'Design and implement databases and data models',
      'Ensure high performance and reliability of applications',
      'Implement security and data protection',
      'Collaborate with frontend developers and data scientists'
    ],
    benefits: [
      'Competitive compensation package',
      'Health and dental benefits',
      'Flexible work schedule',
      'Stock options',
      'Regular team events'
    ],
    skills: ['Python', 'Java', 'SQL', 'AWS', 'Microservices', 'RESTful API'],
    applications: [],
    companySize: '100-500 employees',
    website: 'https://example-datasystems.com',
    featured: false,
    urgent: false,
    similarJobs: [
      {
        id: '2',
        title: 'Senior Backend Engineer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '6',
        title: 'Node.js Developer',
        company: 'ServerPro',
        location: 'Remote',
      }
    ]
  },
  {
    id: '5',
    title: 'React Developer',
    company: 'WebApp Inc',
    employerId: '6',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Technology',
    salary: 115000,
    experience: '2-4 years',
    postedDate: '2023-05-20T11:30:00Z',
    description: 'WebApp Inc is seeking a React Developer to join our team in New York. You will be responsible for building and maintaining our core web applications.',
    requirements: [
      'Strong experience with React and its ecosystem',
      'Proficient in JavaScript/TypeScript',
      'Experience with state management libraries (Redux, MobX)',
      'Knowledge of modern build tools and workflows',
      'Understanding of responsive design principles'
    ],
    responsibilities: [
      'Develop new features and maintain existing ones',
      'Write clean, maintainable, and well-documented code',
      'Collaborate with designers and backend developers',
      'Troubleshoot and fix bugs and issues',
      'Participate in code reviews and team meetings'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Unlimited PTO',
      '401(k) with company match',
      'Weekly team lunches'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'CSS', 'HTML'],
    applications: [],
    companySize: '20-50 employees',
    website: 'https://example-webapp.com',
    featured: false,
    urgent: true,
    similarJobs: [
      {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '3',
        title: 'Frontend Engineer',
        company: 'SoftTech Solutions',
        location: 'Remote',
      }
    ]
  },
  {
    id: '6',
    title: 'Node.js Developer',
    company: 'ServerPro',
    employerId: '7',
    location: 'Remote',
    type: 'Contract',
    category: 'Technology',
    salary: 90000,
    experience: '3+ years',
    postedDate: '2023-05-17T13:15:00Z',
    description: 'ServerPro is looking for a Node.js Developer to work on our backend infrastructure and API services. This is a 6-month contract with possibility of extension.',
    requirements: [
      'Strong experience with Node.js and Express',
      'Familiarity with MongoDB or other NoSQL databases',
      'Knowledge of RESTful API design',
      'Experience with testing frameworks like Mocha or Jest',
      'Understanding of security best practices'
    ],
    responsibilities: [
      'Develop and maintain backend services using Node.js',
      'Design and implement RESTful APIs',
      'Integrate with third-party services and APIs',
      'Write comprehensive tests for your code',
      'Collaborate with frontend developers'
    ],
    benefits: [
      'Competitive hourly rate',
      'Flexible working hours',
      'Remote work',
      'Weekly team calls',
      'Learning budget'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Mocha', 'JavaScript'],
    applications: [],
    companySize: '10-20 employees',
    website: 'https://example-serverpro.com',
    featured: false,
    urgent: false,
    similarJobs: [
      {
        id: '2',
        title: 'Senior Backend Engineer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '4',
        title: 'Backend Developer',
        company: 'Data Systems',
        location: 'Seattle, WA',
      }
    ]
  },
  {
    id: '7',
    title: 'UX/UI Designer',
    company: 'Creative Designs',
    employerId: '8',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    category: 'Design',
    salary: 100000,
    experience: '2-5 years',
    postedDate: '2023-05-14T10:00:00Z',
    description: 'Creative Designs is looking for a talented UX/UI Designer to create amazing user experiences for our clients. You will work closely with our development team to ensure designs are implemented correctly.',
    requirements: [
      'Experience with design tools like Figma, Sketch, or Adobe XD',
      'Strong portfolio showcasing your design work',
      'Understanding of user-centered design principles',
      'Knowledge of UI/UX best practices',
      'Ability to create wireframes, prototypes, and high-fidelity designs'
    ],
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Design wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers to implement designs',
      'Stay up-to-date with design trends and best practices'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Flexible work schedule',
      'Creative work environment',
      'Professional development opportunities'
    ],
    skills: ['UI Design', 'UX Design', 'Figma', 'Sketch', 'Prototyping', 'User Research'],
    applications: [],
    companySize: '10-50 employees',
    website: 'https://example-creativedesigns.com',
    featured: true,
    urgent: false,
    similarJobs: [
      {
        id: '8',
        title: 'UI Developer',
        company: 'Design Masters',
        location: 'Austin, TX',
      }
    ]
  },
  {
    id: '8',
    title: 'UI Developer',
    company: 'Design Masters',
    employerId: '9',
    location: 'Austin, TX',
    type: 'Full-time',
    category: 'Design',
    salary: 95000,
    experience: '1-3 years',
    postedDate: '2023-05-19T15:45:00Z',
    description: 'Design Masters is seeking a UI Developer who is passionate about creating beautiful and functional user interfaces. You will be part of our creative team, translating designs into code.',
    requirements: [
      'Strong HTML, CSS, and JavaScript skills',
      'Experience with CSS preprocessors like SASS or LESS',
      'Knowledge of responsive design principles',
      'Familiarity with frontend frameworks like React or Vue',
      'Eye for design and attention to detail'
    ],
    responsibilities: [
      'Implement responsive user interfaces based on designs',
      'Write clean, semantic HTML, CSS, and JavaScript',
      'Ensure cross-browser compatibility and accessibility',
      'Collaborate with designers and other developers',
      'Optimize UI performance'
    ],
    benefits: [
      'Competitive salary',
      'Health benefits',
      'Flexible work arrangements',
      'Modern office with standing desks',
      'Regular team activities'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'SASS', 'Responsive Design', 'UI Development'],
    applications: [],
    companySize: '20-50 employees',
    website: 'https://example-designmasters.com',
    featured: false,
    urgent: true,
    similarJobs: [
      {
        id: '7',
        title: 'UX/UI Designer',
        company: 'Creative Designs',
        location: 'Los Angeles, CA',
      },
      {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      }
    ]
  },
  {
    id: '9',
    title: 'Full Stack Engineer',
    company: 'TechFlow',
    employerId: '10',
    location: 'Chicago, IL',
    type: 'Full-time',
    category: 'Technology',
    salary: 130000,
    experience: '4+ years',
    postedDate: '2023-05-16T09:30:00Z',
    description: 'TechFlow is looking for a skilled Full Stack Engineer to join our team in Chicago. You will be responsible for developing both frontend and backend components of our web applications.',
    requirements: [
      'Strong experience with JavaScript/TypeScript',
      'Proficiency in frontend frameworks (React, Angular, or Vue)',
      'Experience with Node.js or similar backend technologies',
      'Knowledge of SQL and NoSQL databases',
      'Understanding of DevOps practices and CI/CD pipelines'
    ],
    responsibilities: [
      'Develop and maintain both frontend and backend components',
      'Design and implement databases and APIs',
      'Ensure application performance, security, and reliability',
      'Collaborate with product managers and designers',
      'Mentor junior developers'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      '401(k) matching',
      'Continuing education stipend'
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Git'],
    applications: [],
    companySize: '50-200 employees',
    website: 'https://example-techflow.com',
    featured: true,
    urgent: false,
    similarJobs: [
      {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '2',
        title: 'Senior Backend Engineer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      }
    ]
  },
  {
    id: '10',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    employerId: '11',
    location: 'Denver, CO',
    type: 'Full-time',
    category: 'Technology',
    salary: 135000,
    experience: '3-5 years',
    postedDate: '2023-05-13T11:00:00Z',
    description: 'CloudTech is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. You will be responsible for automating deployments and ensuring system reliability.',
    requirements: [
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Familiarity with Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with CI/CD tools (Jenkins, GitLab CI, or GitHub Actions)',
      'Understanding of monitoring and logging systems'
    ],
    responsibilities: [
      'Design and implement cloud infrastructure',
      'Create and maintain CI/CD pipelines',
      'Automate deployment processes',
      'Monitor system performance and reliability',
      'Collaborate with development teams to improve workflows'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      '401(k) with company match',
      'Professional development budget'
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'GitOps'],
    applications: [],
    companySize: '20-100 employees',
    website: 'https://example-cloudtech.com',
    featured: false,
    urgent: false,
    similarJobs: [
      {
        id: '2',
        title: 'Senior Backend Engineer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
      },
      {
        id: '4',
        title: 'Backend Developer',
        company: 'Data Systems',
        location: 'Seattle, WA',
      }
    ]
  }
];

// Store applications
let applications = [];

// Delay function to simulate network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all jobs
export const getJobs = async () => {
  await delay(800); // Simulate API call
  return [...jobs];
};

// Get job by ID
export const getJobById = async (id) => {
  await delay(500); // Simulate API call
  
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    throw new Error('Job not found');
  }
  
  return job;
};

// Create a new job
export const createJob = async (jobData) => {
  await delay(1000); // Simulate API call
  
  const newJob = {
    id: (jobs.length + 1).toString(),
    ...jobData,
    applications: [],
    postedDate: new Date().toISOString(),
  };
  
  jobs.push(newJob);
  
  return newJob;
};

// Update job
export const updateJob = async (id, jobData) => {
  await delay(800); // Simulate API call
  
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    throw new Error('Job not found');
  }
  
  // Update job
  const updatedJob = {
    ...jobs[jobIndex],
    ...jobData,
  };
  
  jobs[jobIndex] = updatedJob;
  
  return updatedJob;
};

// Delete job
export const deleteJob = async (id) => {
  await delay(600); // Simulate API call
  
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    throw new Error('Job not found');
  }
  
  // Remove job
  jobs = jobs.filter(job => job.id !== id);
  
  return { success: true };
};

// Apply to job
export const applyToJob = async (jobId, applicationData) => {
  await delay(1200); // Simulate API call
  
  const job = jobs.find(job => job.id === jobId);
  
  if (!job) {
    throw new Error('Job not found');
  }
  
  // Create application
  const application = {
    id: (applications.length + 1).toString(),
    jobId,
    jobTitle: job.title,
    company: job.company,
    ...applicationData,
    status: 'pending',
    appliedAt: new Date().toISOString(),
  };
  
  // Add application to list
  applications.push(application);
  
  // Add application ID to job's applications array
  const jobIndex = jobs.findIndex(job => job.id === jobId);
  jobs[jobIndex].applications.push(application.id);
  
  return application;
};

// Get applications by job ID
export const getApplicationsByJob = async (jobId) => {
  await delay(800); // Simulate API call
  
  return applications.filter(app => app.jobId === jobId);
};

// Get applications by user ID
export const getApplicationsByUser = async (userId) => {
  await delay(800); // Simulate API call
  
  return applications.filter(app => app.userId === userId);
};

// Update application status
export const updateApplicationStatus = async (applicationId, status) => {
  await delay(600); // Simulate API call
  
  const appIndex = applications.findIndex(app => app.id === applicationId);
  
  if (appIndex === -1) {
    throw new Error('Application not found');
  }
  
  // Update status
  applications[appIndex].status = status;
  
  return applications[appIndex];
};

// Search jobs by filters
export const searchJobs = async (filters) => {
  await delay(1000); // Simulate API call
  
  let filteredJobs = [...jobs];
  
  // Apply search filter
  if (filters.search) {
    const searchTerms = filters.search.toLowerCase().split(' ');
    filteredJobs = filteredJobs.filter(job => {
      return searchTerms.some(term => 
        job.title.toLowerCase().includes(term) || 
        job.company.toLowerCase().includes(term) || 
        job.description.toLowerCase().includes(term)
      );
    });
  }
  
  // Apply location filter
  if (filters.location) {
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }
  
  // Apply category filter
  if (filters.category) {
    filteredJobs = filteredJobs.filter(job => job.category === filters.category);
  }
  
  // Apply job type filter
  if (filters.jobType) {
    filteredJobs = filteredJobs.filter(job => job.type === filters.jobType);
  }
  
  // Apply salary filters
  if (filters.salaryMin) {
    filteredJobs = filteredJobs.filter(job => job.salary >= parseInt(filters.salaryMin));
  }
  
  if (filters.salaryMax) {
    filteredJobs = filteredJobs.filter(job => job.salary <= parseInt(filters.salaryMax));
  }
  
  return filteredJobs;
};