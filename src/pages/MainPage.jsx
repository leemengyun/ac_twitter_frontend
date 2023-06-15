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
import { createTweet } from '../api/twitter';
import { useAuth } from '../components/context/AuthContext';
import ModalReply from '../components/basic/ModalReply';
import { set } from 'react-hook-form';

const MainPage = ({ setModalTweetOpen }) => {
  const [tweets, setTweets] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const { isAuthentic, member, modalReplyOpen } = useAuth(); // 取出需要的狀態與方法
  const [isTweetsLoaded, setIsTweetsLoaded] = useState(false);

  const handleClickCard = ({ userId, tweetId }) => {
    userId === profile.id
      ? navigate(`/user/${userId}`)
      : userId !== undefined && navigate(`/other/${userId}`);
    tweetId && navigate(`/main/tweet/${tweetId}`);
  };
  //@呼叫 /api/tweets
  const getTweetsAsync = async () => {
    try {
      const data = await getTweets();
      setTweets(data);
    } catch (error) {
      console.log(error);
      setIsTweetsLoaded(true); // 标记为已加载，以防止无限加载
    }
  };

  // @ 0613新增tweet
  // @ 但api與送出資料不太對應，會造成下方tweetLists無法render
  const handleAddTweets = async (data) => {
    // alert('submit todos');
    // console.log(data);
    try {
      const addData = await createTweet({
        UserId: member.id,
        description: data.description,
      });
      //@ 再呼叫一次
      getTweetsAsync();

      // setTweets([
      //   ...tweets,
      //   {
      //     id: addData.id,
      //     description: addData.description,
      //     key: addData.id,
      //     User: {
      //       avatar: profile.avatar,
      //       account: profile.account,
      //       name: profile.name,
      //     },
      //     userId: addData.userId,
      //     time: addData.createdAt,
      //     likesCount: 0,
      //     repliesCount: 0,
      //   },
      // ]);
    } catch (error) {
      console.log(`[createData failed]`, error);
    }
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
    getTweetsAsync();
  }, []);
  //@ 這一頁的驗證身份放最上面,currentMember好像比較不會出錯
  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]); //只要isAuthentic或navigation有變化便執行

  // console.log('testData', testData);
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
              <TweetCardForm
                {...profile}
                onAddTweet={handleAddTweets}
                setTweets={setTweets}
                tweets={tweets}
              />
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
