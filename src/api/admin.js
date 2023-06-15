import axios from 'axios';
// const baseUrl = 'http://localhost:3004';

const baseUrl = 'https://calm-eyrie-50498.herokuapp.com/api';
// const baseUrl = 'https://agile-forest-26034.herokuapp.com/api';

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

//@目前admin/users還沒做好，目前先打一般users
export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users`); //watch的屬性名作為path
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('[Get Admin Users failed]:', error);
  }
};
