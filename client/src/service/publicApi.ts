import axios from "axios";

const publicApi = axios.create({
  baseURL: 'http://localhost:3003'
});

export default publicApi;
