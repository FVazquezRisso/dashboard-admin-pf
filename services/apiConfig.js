import axios from 'axios'

export const spotyFansApi = axios.create({
  baseURL: "https://spootyfans.onrender.com",
  // baseURL: "http://localhost:3001",
});