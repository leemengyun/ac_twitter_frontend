import axios from 'axios'

const baseUrl =  'https://calm-eyrie-50498.herokuapp.com/api'

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


export const getTweets = async()=>{
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`); //watch的屬性名作為path
    //console.log(res.data[0].data)//{status: 'success', data: {…}}data: {tweets: Array(7)}status: "success"[[Prototype]]: Object 
  return res.data.data //{tweets: Array(7)}
  }catch(error){
    console.log('[Get Tweets failed]:', error);
  }
};

export const getTopUsers = async()=>{
  try{
    const res = await axiosInstance.get(`${baseUrl}/users/top`)
    console.log(res.data)
    return res.data.data
  }catch(error){
    console.log('[get topUser failed]:', error )
  }
}

export const getTweet = async()=>{
  try{
    const res = await axiosInstance.get(`${baseUrl}/tweets/1`)
    return res.data.data
  }catch(error){
    console.log('[Get Tweet Failed]: ', error)
  }
}

