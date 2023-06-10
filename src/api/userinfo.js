import axios from 'axios';

// const baseUrl = 'http://localhost:3004';
const baseUrl = 'https://calm-eyrie-50498.herokuapp.com/api';

//要記得export外面才能用
export const getUserInfo = async () => {
  try {
    // 獲得todo end point
    // const res = await axios.get(`${baseUrl}/userinfo`);
    const res = await axios.get(`${baseUrl}/users/1`);

    //server 回傳的物件會包在data,所以一定要用.data才會拿到對的資料
    // console.log(res.data[0].data.user);
    // return res.data[0].data.user;
    // console.log(res.data.data);
    return res.data.data.user;
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
