import React from 'react';
import FollowCard from '../basic/FollowCard'
// import iconLogo from '../assets/images/icon/logo.svg';
// import svg
// import iconHome from '../assets/images/icon/home.svg';

const FollowCardList = () => {
  const dummyData ={
      status: "success",
      data: {
      users: [
         {
          id: 1,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 2,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 3,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 4,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 5,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 6,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 7,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 8,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 9,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       },
       {
          id: 10,
          account: "test-acount-1",
          email: "test1@example.com",
          password: "$2a$10$MlmbvV0fDfjJuqipEU88W.KSo75y8Zc1C/hxA.rdG772HaALUiSQ.",
          name: "test-1",
          avatar: "https://i.imgur.com/YcP0tik.jpeg",
          "introduction": "Hi I am test No.1",
          banner: "https://i.imgur.com/3ZH4ZZ8.jpeg",
          role: "user",
          createdAt: "2023-05-25T11:09:42.000Z",
          updatedAt: "2023-05-25T11:09:42.000Z",
          isfollowging: true
       }
      ]
      }
    }
  const users = (dummyData.data.users)[0]
  console.log(users)
  return (
    <>
      <div className='follow-list-container'>
        <div className='title-secondary'>
          <h4>推薦跟隨</h4>
        </div>
         {/* <FollowCard 
         {...users[0]}
         /> */}
      </div>
    </>
  );
};

export default FollowCardList;
