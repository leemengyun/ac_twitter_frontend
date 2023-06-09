import React from 'react';
import TweetCardBasic from '../basic/TweetCardBasic';

const TweetsLists = ({tweets,onClick}) => {
  console.log(tweets)
  return (
    <div>
      <h1>Nested TweetsLists</h1>
      {tweets.map((tweet)=>{
        return <TweetCardBasic 
          key={tweet.id}
          {...tweet}
          onClick={({id})=>{
            onClick?.({id})
          }}
        />
      })}
    </div>
  );
};

export default TweetsLists;
