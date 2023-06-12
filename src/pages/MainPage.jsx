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
import ReplyModal from '../components/basic/ReplyModal';

const MainPage = ({ setModalTweetOpen }) => {
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
        // setTweets(data.tweets);
        setTweets(dummyData.user.tweets)
      } catch (error) {
        console.log(error);
      }
    };
    getTweetsAsync();
  }, []);


  const dummyData = {
    user: {
      id: 1,
      account: 'test-acount-1',
      email: 'test1@example.com',
      password: '$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.',
      name: 'test-1',
      avatar: 'https://i.imgur.com/YcP0tik.jpeg',
      introduction: 'Hi I am test No.1',
      banner: 'https://i.imgur.com/3ZH4ZZ8.jpeg',
      role: 'user',
      createdAt: '2023-05-25T11:09:42.000Z',
      updatedA: '2023-05-25T11:09:42.000Z',
      tweets: [
        {
          id: 1,
          userId: 1,
          description: 'Test-Tweet-user1-1',
          createdAt: '2023-05-25T11:09:42.000Z',
          updatedAt: '2023-05-25T11:09:42.000Z',
          isLiked: true,
          repliesCount: 1,
          user: {
            name: 'test-1-name',
            account: 'test-1-account',
            avatar: 'https://i.imgur.com/YcP0tik.jpeg',
          },
        },
        {
          id: 2,
          userId: 1,
          description: 'Test-Tweet-user1-1',
          createdAt: '2023-05-25T11:09:42.000Z',
          updatedAt: '2023-05-25T11:09:42.000Z',
          isLiked: true,
          repliesCount: 1,
          user: {
            name: 'test-1-name',
            account: 'test-1-account',
            avatar: 'https://i.imgur.com/YcP0tik.jpeg',
          },
        },
        {
          id: 3,
          userId: 1,
          description: 'Test-Tweet-user1-1',
          createdAt: '2023-05-25T11:09:42.000Z',
          updatedAt: '2023-05-25T11:09:42.000Z',
          isLiked: true,
          repliesCount: 1,
          user: {
            name: 'test-1-name',
            account: 'test-1-account',
            avatar: 'https://i.imgur.com/YcP0tik.jpeg',
          },
        },
      ],
    },
  };

  const replyDummy = {
    member:{
        id: 3,
          userId: 1,
          name: '9488888',
          account: '94879487',
          description: `台灣夜宵的代表美食當然是鹹酥雞啦！在各個街頭小攤都能看到炸得香脆的雞肉塊😍
雖然今天只炸雞肉，但如果在台灣的話，一定會點選墨魚（魷魚）和雞屁股（雞尾巴肉）還有甜不辣（一種炸糕點）😜😍
這道料理非常適合搭配啤酒喔！！`,
          avatar: 'https://i.imgur.com/YcP0tik.jpeg',
          createdAt: '2023-05-25T11:09:42.000Z',
          updatedAt: '2023-05-25T11:09:42.000Z',
          isLiked: true,
          repliesCount: 1,
      user: {
        id: 1,
        account: '自製鹹酥雞',
        email: 'test1@example.com',
        password: '$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.',
        name: '自製鹹酥雞',
        avatar: 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/279935/28d2a7f728c3fdd0.jpg',
        description: 'Test-Tweet-user1-1',
        introduction: 'Hi I am test No.1',
        banner: 'https://i.imgur.com/3ZH4ZZ8.jpeg',
        role: 'user',
        createdAt: '2023-05-25T11:09:42.000Z',
        updatedA: '2023-05-25T11:09:42.000Z'
      }
    }
  }
  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        pageIndex={0}
      >
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <div className='tweet-form-wrapper'>
              <TweetCardForm />
            </div>

            <TweetLists tweets={tweets} onClick={handleClickCard} />
            <ReplyModal 
            {...replyDummy.member}
            userName={replyDummy.member.user.name}
            userAccount={replyDummy.member.user.account}
            time={replyDummy.member.user.createdAt}
            userAvatar={replyDummy.member.user.avatar}
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
