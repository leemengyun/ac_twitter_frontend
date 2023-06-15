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

//取得User的推文
export const getUserTweets = async (pathId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${pathId}/tweets`);
    return res.data;
  } catch (error) {
    console.log('[Get UserTweets Failed!!]:', error);
  }
};
//取得User Liked的推文
export const getUserLikedTweets = async (pathId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${pathId}/likes`);
    return res.data;
  } catch (error) {
    console.log('[Get getUserLikedTweets Failed!!]:', error);
  }
};

//取得User Replied的推文
export const getUserRepliedTweets = async (pathId) => {
  try {
    const res = await axiosInstance.get(
      `${baseUrl}/users/${pathId}/replied_tweets`
    );
    return res.data;
  } catch (error) {
    console.log('[Get getUserLikedTweets Failed!!]:', error);
  }
};

//新增 tweet
export const createTweet = async (payload) => {
  try {
    const { UserId, description } = payload;
    const res = await axios.post(`http://localhost:3004/tweets`, {
      UserId,
      description,
    });
    return res.data;
  } catch (error) {
    console.error('[CREATE todos failed:]:', error);
  }
};

//跟隨使用者
export const userFollowing = async (payload) => {
  try {
    const { UserId } = payload;
    const res = await axiosInstance.post(`${baseUrl}/followships`, {
      UserId
    });
    return res.data;
  } catch (error) {
    console.error('[Following failed:]:', error);
  }
};
//取消跟隨
export const cancelFollow = async (followerId) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/followships/${followerId}`);
    return res.data;
  } catch (error) {
    console.error('[Cancel Follow failed:]:', error);
  }
};

