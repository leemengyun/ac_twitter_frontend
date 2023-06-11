import React from 'react';
import TweetCardReply from '../basic/TweetCardReply';

const ReplyLists = ({users, onClick}) => {
  const tweets = users.tweets
  const userName = users.name
  const userAccount = users.account
  const userAvatar = users.avatar
  
  return (
    <div className='TweetLists'>
      <h1>Nested TweetsLists</h1>
 update/main
      {tweets.map((tweet)=>{
        return <TweetCardReply 
          key={tweet.id}
          {...tweet}
          userName={userName}
          userAvatar={userAvatar}
          userAccount={userAccount}
          // onClick={({id,userId})=>{
          //   onClick?.({id,userId})
          // }}
        />
   })}
    </div>
  );
};

export default ReplyLists;
