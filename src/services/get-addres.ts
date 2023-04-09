import { api } from './index';

export const getAddress = async (ip = '8.8.8.8') => {
  const response = await api.get(`${ip}`);
  return response.data;
};
