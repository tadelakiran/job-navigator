import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { loginUser, registerUser, getCurrentUser, logoutUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const initAuth = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const user = await loginUser(email, password);
      setCurrentUser(user);
      toast.success('Login successful!');
      return user;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const user = await registerUser(userData);
      setCurrentUser(user);
      toast.success('Registration successful!');
      return user;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      setCurrentUser(null);
      toast.success('Logged out successfully');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isEmployer = () => {
    return currentUser?.role === 'employer';
  };

  const isAdmin = () => {
    return currentUser?.role === 'admin';
  };

  const isJobSeeker = () => {
    return currentUser?.role === 'jobseeker';
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        login,
        register,
        logout,
        isEmployer,
        isAdmin,
        isJobSeeker,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};