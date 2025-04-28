import { toast } from 'react-toastify';

// Mock user data
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'jobseeker@example.com',
    password: 'password123',
    role: 'jobseeker',
    applications: [],
    resume: null,
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Tech Corp',
        startDate: '2020-01',
        endDate: '2022-05',
        description: 'Developed responsive web applications using React and Redux.'
      }
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'employer@example.com',
    password: 'password123',
    role: 'employer',
    company: 'Tech Innovators',
    postedJobs: ['1', '2'],
    companyDescription: 'Leading tech company specializing in innovative solutions.',
    founded: '2010',
    website: 'https://example.com'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    role: 'admin'
  }
];

// Simulate localStorage for session persistence
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Delay function to simulate network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Login function
export const loginUser = async (email, password) => {
  await delay(1000); // Simulate API call
  
  const user = users.find(user => user.email === email);
  
  if (!user) {
    throw new Error('No user found with this email');
  }
  
  if (user.password !== password) {
    throw new Error('Invalid password');
  }
  
  // Create a user object without the password
  const { password: _, ...userWithoutPassword } = user;
  
  // Store in "localStorage"
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  currentUser = userWithoutPassword;
  
  return userWithoutPassword;
};

// Register function
export const registerUser = async (userData) => {
  await delay(1000); // Simulate API call
  
  const { name, email, password, role } = userData;
  
  // Check if email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('Email already in use');
  }
  
  // Create new user
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    password,
    role,
    applications: [],
    ...(role === 'employer' ? { postedJobs: [] } : {}),
    createdAt: new Date().toISOString()
  };
  
  // Add to users array
  users.push(newUser);
  
  // Create a user object without the password
  const { password: _, ...userWithoutPassword } = newUser;
  
  // Store in "localStorage"
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  currentUser = userWithoutPassword;
  
  return userWithoutPassword;
};

// Get current user
export const getCurrentUser = async () => {
  await delay(300); // Simulate API call
  return currentUser;
};

// Update user profile
export const updateUserProfile = async (userId, profileData) => {
  await delay(800); // Simulate API call
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  
  // Update user
  const updatedUser = {
    ...users[userIndex],
    ...profileData,
    // Don't allow updating email or password here
  };
  
  users[userIndex] = updatedUser;
  
  // If this is the current user, update currentUser
  if (currentUser && currentUser.id === userId) {
    const { password: _, ...userWithoutPassword } = updatedUser;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    currentUser = userWithoutPassword;
    return userWithoutPassword;
  }
  
  // Return updated user without password
  const { password: _, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};

// Logout function
export const logoutUser = async () => {
  await delay(500); // Simulate API call
  localStorage.removeItem('currentUser');
  currentUser = null;
};

// Change password
export const changePassword = async (userId, currentPassword, newPassword) => {
  await delay(800); // Simulate API call
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  
  // Verify current password
  if (users[userIndex].password !== currentPassword) {
    throw new Error('Current password is incorrect');
  }
  
  // Update password
  users[userIndex].password = newPassword;
  
  return { success: true, message: 'Password updated successfully' };
};