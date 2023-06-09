import axios from 'axios'

const baseUrl = 'http://localhost:3004'


export const getTweets = async()=>{
  try {
    const res = await axios.get(`${baseUrl}/twitter`); //watch的屬性名作為path
    //console.log(res.data[0].data)//{status: 'success', data: {…}}data: {tweets: Array(7)}status: "success"[[Prototype]]: Object
  return res.data[0].data //{tweets: Array(7)}
  }catch(error){
    console.log('[Get Tweets failed]:', error);
  }
};
