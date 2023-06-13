import React from "react";
import ContainerColSec from "../components/layout/ContainerColSec";
import {HeaderUser} from "../components/basic/Header"
import TweetBigCard from "../components/basic/TweetBigCard";
import { useEffect,useState  } from "react";
import { getTweet } from "../api/twitter";
import FollowCardList from "../components/user/FollowCardList";
import { useAuth } from "../components/context/AuthContext";
import { useParams } from "react-router-dom";


const TweetPage = ({ setModalTweetOpen })=>{
  const [tweetInfo, setTweetInfo] = useState({id:"",UserId:"",description:"",createdAt:"",User:{}})
  //這裡很奇怪只有他 要先設定一樣的結構
  const { isAuthentical, currentMember } = useAuth()
  const pathId = Number(useParams().id);
  
  useEffect(()=>{
    const getTweetAsync = async()=>{
      try{
        const data = await getTweet(pathId)
        setTweetInfo(data)
      }catch(error){
        console.log(error)
      }
    }
    getTweetAsync()
  },[])

  return (
    <ContainerColSec
      role='user'
        setModalTweetOpen={setModalTweetOpen}
        pageIndex={0}
        {...currentMember}
    >
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