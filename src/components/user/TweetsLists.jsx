import React from 'react';
import TweetCardBasic from '../basic/TweetCardBasic';
import { useEffect } from 'react';

const TweetsLists = ({ tweets, onClick }) => {
  return (
    <div className='TweetLists'>
      {tweets.map((tweet) => {
        return (
          <TweetCardBasic
            key={tweet.id}
            {...tweet}
            onClick={({ tweetId, userId }) => {
              onClick?.({ tweetId, userId });
            }}
          />
        );
      })}
    </div>
  );
};

export default TweetsLists;
