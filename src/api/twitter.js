import axios from 'axios'

const baseUrl =  'https://calm-eyrie-50498.herokuapp.com/api'


export const getTweets = async()=>{
  try {
    const res = await axios.get(`${baseUrl}/tweets`); //watch的屬性名作為path
    //console.log(res.data[0].data)//{status: 'success', data: {…}}data: {tweets: Array(7)}status: "success"[[Prototype]]: Object 
  return res.data.data //{tweets: Array(7)}
  }catch(error){
    console.log('[Get Tweets failed]:', error);
  }
};

export const getTopUsers = async()=>{
  try{
    const res = await axios.get(`${baseUrl}/users/top`)
    console.log(res.data)
    return res.data.data
  }catch(error){
    console.log('[get topUser failed]:', error )
  }
}

export const getTweet = async()=>{
  try{
    const res = await axios.get(`${baseUrl}/tweets/1`)
    return res.data.data
  }catch(error){
    console.log('[Get Tweet Failed]: ', error)
  }
}