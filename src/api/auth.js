import axios from 'axios';

// const baseUrl = 'http://localhost:3004';
// const baseUrl = 'https://calm-eyrie-50498.herokuapp.com/api';
const baseUrl = 'https://agile-forest-26034.herokuapp.com/api';

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/signin`, {
      account,
      password, //解構拿出data
    });
    console.log(data);
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

export const signUp = async ({
  account,
  email,
  password,
  checkPassword,
  name,
}) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users`, {
      account,
      email,
      password,
      checkPassword,
      name,
    });

    console.log('we got data', data);

    //用解構式帶出data
    //登入成功的結果
    const { authToken } = data;
    if (authToken) {
      console.log(data);
      return { success: true, ...data };
    }

    //登入失敗的結果
    return data;
  } catch (error) {
    console.error('["Register failed"]', error);
  }
};
