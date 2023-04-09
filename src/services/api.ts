import axios from 'axios';
import { IPIFY_URI } from '../common/constants';

export const api = axios.create({
  baseURL: IPIFY_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
