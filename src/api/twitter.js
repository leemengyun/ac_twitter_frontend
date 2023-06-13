import axios from 'axios';
// const baseUrl = 'http://localhost:3004';

const baseUrl = 'https://calm-eyrie-50498.herokuapp.com/api';

const axiosInstance = axios.create({
  baseUrl: baseUrl,
});

// Add a request interceptor - 讓api把token帶入
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.error(error);
  }
);

// ,  {
//   headers: {
//     'Content-Type': 'application/json',
//     'Origin': 'https://leemengyun.github.io/'
//   }}

// ,{
//       headers: {
//         'Access-Control-Allow-Origin':'*',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
//         'Accept': 'application/json',
//       }
//     }

export const getTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`); //watch的屬性名作為path
    //console.log(res.data[0].data)//{status: 'success', data: {…}}data: {tweets: Array(7)}status: "success"[[Prototype]]: Object
    return res.data; //{tweets: Array(54)}
  } catch (error) {
    console.log('[Get Tweets failed]:', error);
  }
};

export const getTopUsers = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/top`);
    return res.data;
  } catch (error) {
    console.log('[get topUser failed]:', error);
  }
};

export const getTweet = async (pathId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${pathId}`);
    return res.data;
  } catch (error) {
    console.log('[Get Tweet Failed]: ', error);
  }
};
