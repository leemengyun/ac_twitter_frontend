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

const MainPage = ({ setModalOpen }) => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

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
        setTweets(data.tweets);
      } catch (error) {
        console.log(error);
      }
    };
    getTweetsAsync();
  }, []);

  return (
    <>
      <ContainerColSec role='user' setModalOpen={setModalOpen} pageIndex={0}>
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <div className='tweet-form-wrapper'>
              <TweetCardForm />
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
