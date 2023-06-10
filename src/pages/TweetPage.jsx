import React from "react";
import ContainerColSec from "../components/layout/ContainerColSec";
import {HeaderUser} from "../components/basic/Header"
import TweetBigCard from "../components/basic/TweetBigCard";
import { useEffect,useState  } from "react";
import { getTweet } from "../api/twitter";
import FollowCardList from "../components/user/FollowCardList";


const TweetPage = ()=>{
  const [tweetInfo, setTweetInfo] = useState({description:"",user:{avatar:"",name:"",account:""}})
  useEffect(()=>{
    const getTweetAsync = async()=>{
      try{
        const data = await getTweet()
        setTweetInfo(data.tweet)
      }catch(error){
        console.log(error)
      }
    }
    getTweetAsync()
  },[])
console.log(tweetInfo)
  return (
    <ContainerColSec>
     <section className="section-outer-m col-7">  
       <div className="section-main-m">
          <HeaderUser 
            userAccountName='推文'
          />
          <TweetBigCard 
          tweetInfo={tweetInfo}
          />          
        </div>      
      </section>
      <section className='section-right col-3'>
          <FollowCardList />
        </section>
    </ContainerColSec>
  )
}

export default TweetPage;