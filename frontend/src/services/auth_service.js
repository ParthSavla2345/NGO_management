import api from './api';

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Login API error:', error.response?.data, error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    console.error('Register API error:', error.response?.data, error);
    throw error;
  }
};