import api from './api';

export const getUserDonations = async () => {
  const response = await api.get('/donations');
  return response.data;
};

export const getDonors = async () => {
  const response = await api.get('/donors');
  return response.data;
};