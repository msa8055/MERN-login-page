import axios from 'axios';
import { API_URL } from '../utils/constants';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    // Add this to set authorization header for all future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};