import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName3 from './TweetUserName3';
import TweetIconCount from './TweetIconCount';

const TweetCardBasic = ({ ...props }) => {
  return (
    <div className='tweet-card-basic'>
      <UserAvatar avatar={props.avatar} />
      <div className='tweet-card-left-info'>
        <TweetUserName3
          name={props.name}
          account={props.account}
          time={props.time}
        />
        <p className='tweet-card-basic-description'>{props.description}</p>
        <TweetIconCount
          likeCount={props.likeCount}
          replyCount={props.repliesCount}
        />
      </div>
    </div>
  );
};

export default TweetCardBasic;
