import axios from 'axios';
import { IPIFY_URI } from '../common/constants';

export const getAddress = async (ip: string) => {
  const response = await axios.get(`${IPIFY_URI}${ip}`);
  return response.data;
};
