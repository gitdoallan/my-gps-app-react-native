import axios from 'axios';
import { apiURL } from './apiURL';

export const sendLocationAPI = async (location) => {
  const response = await axios.post(`${apiURL}/points/${location.id}`, [location]);
  console.log(response);
  return response.data;
};
