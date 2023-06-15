import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import FollowCardList from '../components/user/FollowCardList';
import TweetLists from '../components/user/TweetsLists';
import TweetCardForm from '../components/forms/TweetCardForm';
import { HeaderMain } from '../components/basic/Header';

import { getTweets } from '../api/twitter';
import { getUserInfo } from '../api/userinfo';
// import { createTweet } from '../api/twitter';
import { useAuth } from '../components/context/AuthContext';
import ModalReply from '../components/basic/ModalReply';

const MainPage = ({ setModalTweetOpen }) => {
  const [tweets, setTweets] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const { isAuthentic, member, modalReplyOpen } = useAuth(); // 取出需要的狀態與方法
  const handleClickCard = ({ userId }) => {
    userId === profile.id
      ? navigate(`/user/${userId}`)
      : userId !== undefined && navigate(`/other/${userId}`);
  };

  // @ 0613新增tweet
  // @ 但api與送出資料不太對應，會造成下方tweetLists無法render
  const handleAddTweets = async (data) => {
    alert('submit todos');
    // try {
    //   const addData = await createTweet({
    //     UserId: profile.id,
    //     description: data.description,
    //   });

    //   setTweets([
    //     ...tweets,
    //     {
    //       // id: data.id, //我今天嘗試打他都會自己帶id
    //       UserId: addData.UserId,
    //       description: addData.description,
    //     },
    //   ]);
    // } catch (error) {
    //   console.log(`[createData failed]`);
    // }
  };

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const profile = await getUserInfo(member.id);
        setProfile(profile);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };

    getUserInfoAsync();
  }, []);

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const data = await getTweets();
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTweetsAsync();
  }, []);
  //@ 這一頁的驗證身份放最上面,currentMember好像比較不會出錯
  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]); //只要isAuthentic或navigation有變化便執行

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        pageIndex={0}
        memberId={member.id}
      >
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <div className='tweet-form-wrapper'>
              <TweetCardForm {...profile} onAddTweet={handleAddTweets} />
            </div>
            <TweetLists tweets={tweets} onClick={handleClickCard} />
          </div>
          {modalReplyOpen && <ModalReply />}
        </section>
        <section className='section-right col-3'>
          <FollowCardList />
        </section>
      </ContainerColSec>
    </>
  );
};

export default MainPage;
