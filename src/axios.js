import axios from 'axios'
import {baseUrl, baseURL} from './constants/constants'
const instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default instance