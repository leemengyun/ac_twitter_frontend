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

//要記得export外面才能用
export const getUserInfo = async (pathId) => {
  try {
    // 獲得todo end point
    // const res = await axios.get(`${baseUrl}/userinfo`);
    const res = await axiosInstance.get(`${baseUrl}/users/${pathId}`);

    //server 回傳的物件會包在data,所以一定要用.data才會拿到對的資料
    // console.log(res.data[0].data.user);
    // return res.data[0].data.user;
    // console.log(res.data.data);
    console.log(res)
    return res.data;
  } catch (error) {
    console.error('[getUser Info failed]', error);
  }
};

//要記得export外面才能用
// export const updateUserInfo = async (payload) => {
//   try {
//     // 要帶的資料設定為payload
//     const { account, name } = payload;
//     // 獲得todo end point
//     const res = await axios.patch(`${baseUrl}/userinfo`, {
//       account,
//       name,
//     });
//     //server 回傳的物件會包在data,所以一定要用.data才會拿到對的資料
//     return res.data;
//   } catch (error) {
//     console.error('[getUser Info failed]', error);
//   }
// };
