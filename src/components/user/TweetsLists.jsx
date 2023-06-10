import React from 'react';
import TweetCardBasic from '../basic/TweetCardBasic';

const TweetsLists = ({ tweets, onClick }) => {
  console.log(tweets);
  return (
    <div className='TweetLists'>
      <h1>Nested TweetsLists</h1>
 update/main
      {tweets.map((tweet)=>{
        return <TweetCardBasic 
          key={tweet.id}
          {...tweet}
          onClick={({id,userId})=>{
            onClick?.({id,userId})
          }}
        />
   })}
    </div>
  );
};

export default TweetsLists;
