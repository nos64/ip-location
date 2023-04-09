import axios from 'axios';
import { IPIFY_URI } from '../common/constants';

export const getAddress = async (ip = '8.8.8.8') => {
  const response = await axios.get(`${IPIFY_URI}${ip}`);
  return response.data;
};
