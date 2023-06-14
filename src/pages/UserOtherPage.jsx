import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabThreeGroup } from '../components/basic/Tab';

import FollowCardList from '../components/user/FollowCardList';
import ReplyLists from '../components/user/ReplyLists';
import TweetsLists from '../components/user/TweetsLists';
import LikeLists from '../components/user/LikeLists';
import ProfileOtherCard from '../components/basic/ProfileOtherCard';
import { useParams } from 'react-router-dom';
//call api
import { getUserInfo } from '../api/userinfo';
import { useAuth } from '../components/context/AuthContext';
import { getUserTweets } from '../api/twitter';

const UserOtherPage = ({ setModalProOpen, setModalTweetOpen }) => {
  const [tabIndex, setTabIndex] = useState('0');
  const pathId = Number(useParams().id); //取得網址:id
  //向後端 給予(pathid)參數 拿該用戶的資料
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  const navigate = useNavigate();
  const { isAuthentical, currentMember } = useAuth();
  // @串接 local-server 用這一個
  const [userInfo, setUserInfo] = useState({});
  const [userTweets, setUserTweets] = useState([]);
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  // @ tweets 的 dummy資料
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

  // console.log(currentMember)
  //@ profileCard 渲染後端 userInfo

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const userInfo = await getUserInfo(pathId);
        setUserInfo(userInfo);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };
    const getUserTweetsAsync = async () => {
      try {
        const data = await getUserTweets(pathId);
        setUserTweets(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTweetsAsync();
    getUserInfoAsync();
  }, []);

  useEffect(() => {
    if (!isAuthentical) {
      navigate('/login');
    }
  }, [navigate, isAuthentical]); //只要isAuthentical或navigation有變化便執行

  //切換下方tab
  //swtich case 與 if else概念相同，但return component更簡潔(??)
  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '1':
        return <ReplyLists pathId={pathId} />;
      case '2':
        return <LikeLists pathId={pathId} />;
      default:
        return <TweetsLists tweets={userTweets} />;
    }
  }

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        setModalProOpen={setModalProOpen}
        memberId={currentMember.id}
      >
        <section className='section-outer-m col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='Others' userTweetsLength='33推文' />

            <ProfileOtherCard {...userInfo} setModalProOpen={setModalProOpen} />
            <TabThreeGroup tabIndex={tabIndex} setTabIndex={setTabIndex} />

            {switchContext(tabIndex)}
            {/* {tabIndex === '0' && <TweetsLists />}
            {tabIndex === '1' && <ReplyLists />}
            {tabIndex === '2' && <LikeLists />} */}
          </div>
        </section>
        <section className='section-right col-3'>
          <FollowCardList />
        </section>
      </ContainerColSec>
    </>
  );
};

export default UserOtherPage;
