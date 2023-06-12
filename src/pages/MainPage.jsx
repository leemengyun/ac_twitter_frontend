import React from 'react';
//nested router - need Link and Outlet

// import custom components
import { useState, useEffect } from 'react';
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderMain } from '../components/basic/Header';
import FollowCardList from '../components/user/FollowCardList';
import TweetLists from '../components/user/TweetsLists';
import { getTweets } from '../api/twitter';
import { useNavigate } from 'react-router-dom';
import TweetCardForm from '../components/forms/TweetCardForm';
import { useAuth } from '../components/context/AuthContext';

const MainPage = ({ setModalTweetOpen }) => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();
  const { isAuthentical, currentMember } = useAuth(); // 取出需要的狀態與方法

  //@ 切換內容到卡片/other user
  const handleClickCard = ({ id, userId }) => {
    {
      id && navigate(`/main/tweet/${id}`);
    }
    {
      userId && navigate(`/user/${userId}`);
    }
  };

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const data = await getTweets();
        // console.log(data);
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTweetsAsync();
  }, []);

  useEffect(() => {
    if (!isAuthentical) {
      navigate('/login');
    }
  }, [navigate, isAuthentical]); //只要isAuthentical或navigation有變化便執行

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        pageIndex={0}
        {...currentMember}
      >
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <div className='tweet-form-wrapper'>
              <TweetCardForm avatar={currentMember?.avatar} />
            </div>

            <TweetLists tweets={tweets} onClick={handleClickCard} />
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
