import axios from 'axios';

const baseUrl = 'https://calm-eyrie-50498.herokuapp.com/api';

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/signin`, {
      account,
      password, //解構拿出data
    });
    const { token } = data.data; //解構拿出authToken
    // console.log('Token: ',token )
    // console.log('data:',data)
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};
