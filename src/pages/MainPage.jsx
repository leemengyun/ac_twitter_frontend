import React from 'react';
//nested router - need Link and Outlet

// import custom components
import { useState, useEffect } from 'react';
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderMain } from '../components/basic/Header';
import FollowCardList from '../components/user/FollowCardList';
import TweetLists from '../components/user/TweetsLists'
import { getTweets } from '../api/twitter';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/basic/ProfileCard';


const MainPage = () => {
  const [tweets, setTweets] = useState([])
  const navigation = useNavigate()
  
  
  
  const handleClickCard = ({id,userId})=>{
    console.log(`id ${id}`)
    console.log(`userid ${userId}`)
    {userId && navigation(`/user/${userId}`)}
    {id && navigation(`/main/tweet/${id}`)}
    //http://localhost:3000/user/:id
    console.log(id)
  }


   useEffect(()=>{
  const getTweetsAsync = async()=>{
    try{
      const data = await getTweets()
      setTweets(data.tweets)
    }catch(error){
      console.log(error)
    }
  }
  getTweetsAsync()
},[])


  return (
    <>
      <ContainerColSec role='user'>
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <h1>輸入tweet區塊</h1>
            <h1>卡片lists</h1>
            <ProfileCard />
             <TweetLists 
              tweets={tweets}
              onClick={handleClickCard}
            />
          </div>
        </section>
        <section className='section-right col-3'>
          <FollowCardList />
        </section>
      </ContainerColSec>
    </>
  );
};

export default MainPage;
