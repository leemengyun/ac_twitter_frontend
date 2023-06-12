import React from 'react';
import ReplyModal from '../basic/ReplyModal';
import TweetCardForm from './TweetCardForm';

const ReplyCardForm = ()=>{

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
    <div className='tweet-reply-wrapper'>
      <ReplyModal 
      {...replyDummy.member}
      userName={replyDummy.member.user.name}
      userAccount={replyDummy.member.user.account}
      time={replyDummy.member.user.createdAt}
      userAvatar={replyDummy.member.user.avatar}/>
    </div>
  )
}

export default ReplyCardForm;