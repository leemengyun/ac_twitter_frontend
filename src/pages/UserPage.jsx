import { useState, useEffect } from 'react';
//nested router - need Link and Outlet

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabThreeGroup } from '../components/basic/Tab';

import FollowCardList from '../components/user/FollowCardList';
import ReplyLists from '../components/user/ReplyLists';
import TweetsLists from '../components/user/TweetsLists';
import LikeLists from '../components/user/LikeLists';

import { useParams } from 'react-router-dom';
//call api
import { getUserInfo } from '../api/userinfo';

import ProfileCard from '../components/basic/ProfileCard';
// import { set } from 'react-hook-form';
// import Modal from '../components/basic/Modal';

const UserPage = ({ modalOpen, setModalOpen }) => {
  const [tabIndex, setTabIndex] = useState('0');
  const pathId = Number(useParams().id); //取得網址:id
  //向後端 給予(pathid)參數 拿該用戶的資料
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  // @ tweets 的 dummy資料
  const dummyData = {
    user: {
      id: 1,
      account: 'test-acount-1',
      email: 'test1@example.com',
      password: '$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.',
      name: 'test-1',
      avatr: 'https://i.imgur.com/YcP0tik.jpeg',
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

  // @串接 local-server 用這一個
  const [userInfo, setUserInfo] = useState('');

  // @串接 ProfileCard的api資料
  // const dummyData = {
  //   status: 'success',
  //   data: {
  //     user: {
  //       id: 1,
  //       account: 'dummyAAA',
  //       email: 'test1@example.com',
  //       password:
  //         '$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.',
  //       name: 'dummyAAA',
  //       avatar: 'https://i.imgur.com/YcP0tik.jpeg',
  //       introduction: 'Hi I am AAA',
  //       banner: 'https://i.imgur.com/3ZH4ZZ8.jpeg',
  //       role: 'user',
  //       createdAt: '2023-05-25T11:09:42.000Z',
  //       updatedAt: '2023-05-25T11:09:42.000Z',
  //       tweets: [
  //         {
  //           id: 1,
  //           userId: 1,
  //           description: 'Test-Tweet-user1-1',
  //           createdAt: '2023-05-25T11:09:42.000Z',
  //           updatedAt: '2023-05-25T11:09:42.000Z',
  //           isLiked: true,
  //           repliesCount: 1,
  //           user: {
  //             name: 'test-1-name',
  //             account: 'test-1-account',
  //             avatar: 'https://i.imgur.com/YcP0tik.jpeg',
  //           },
  //         },
  //         {
  //           id: 2,
  //           userId: 1,
  //           description: 'Test-Tweet-user1-2',
  //           createdAt: '2023-05-25T11:09:42.000Z',
  //           updatedAt: '2023-05-25T11:09:42.000Z',
  //           isLiked: false,
  //           repliesCount: 2,
  //           user: {
  //             name: 'test-1-name',
  //             account: 'test-1-account',
  //             avatar: 'https://i.imgur.com/YcP0tik.jpeg',
  //           },
  //         },
  //         {
  //           id: 3,
  //           userId: 1,
  //           description: 'Test-Tweet-user3-3',
  //           createdAt: '2023-05-25T11:09:42.000Z',
  //           updatedAt: '2023-05-25T11:09:42.000Z',
  //           isLiked: false,
  //           repliesCount: 3,
  //           user: {
  //             name: 'test-1-name',
  //             account: 'test-1-account',
  //             avatar: 'https://i.imgur.com/YcP0tik.jpeg',
  //           },
  //         },
  //       ],
  //     },
  //   },
  // };
  // @串接dummy 用這一個
  // const userInfo = dummyData.data.user;

  //@ profileCard 渲染後端 userInfo

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const userInfo = await getUserInfo();
        setUserInfo(userInfo);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };
    getUserInfoAsync();
  }, []);

  //切換下方tab
  //swtich case 與 if else概念相同，但return component更簡潔(??)
  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '1':
        return <ReplyLists />;
      case '2':
        return <LikeLists />;
      default:
        return <TweetsLists tweets={dummyData.user.tweets} />;
    }
  }

  return (
    <>
      <ContainerColSec
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        pageIndex={1}
      >
        <section className='section-outer-m  col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='John Doe' userTweetsLength='25推文' />

            {/* <h1>UserCard</h1> */}
            <ProfileCard {...userInfo} />
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

export default UserPage;
