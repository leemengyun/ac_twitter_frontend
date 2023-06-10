import React from "react";
import ContainerColSec from "../components/layout/ContainerColSec";
import {HeaderUser} from "../components/basic/Header"
import TweetBigCard from "../components/basic/TweetBigCard";
import { useEffect,useState  } from "react";
import { getTweet } from "../api/twitter";


const TweetPage = ()=>{
  const [tweetInfo, setTweetInfo] = useState([])
  
  useEffect(()=>{
    const getTweetAsync = async()=>{
      try{
        const data = await getTweet();
         setTweetInfo(data.data.tweet)
      }catch(error){
        console.log(error)
      }
    }
    getTweetAsync()
    
  },[])
  
  
  return (
    <ContainerColSec>
     <section className="section-outer-m col-7">  
       <div className="section-main-m">
          <HeaderUser 
            userAccountName='推文'
          />
          {/* <TweetBigCard 
            {...tweetInfo}
          /> */}
        </div> 
      </section>
    </ContainerColSec>
  )
}

export default TweetPage;