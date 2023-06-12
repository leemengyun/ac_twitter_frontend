import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName3 from './TweetUserName3';
import TweetIconCount from './TweetIconCount';

const TweetCardBasic = ({ ...props }) => {
  // console.log(props);
  // console.log(props.User);
  const value = {
    id: props.User.id,
    userId: props.User.id,
  };

  return (
    <div
      className='tweet-card-basic'
      onClick={() => {
        props.onClick?.({ id: props.User.id });
      }}
    >
      <UserAvatar
        avatar={props.User.avatar}
        {...value}
        onClick={({ id, userId }) => {
          props.onClick?.({ id, userId });
        }}
      />
      <div className='tweet-card-left-info'>
        <TweetUserName3
          name={props.User.name}
          account={props.User.account}
          time={'2023-06-10T03:29:40.000Z'}
        />
        <p className='tweet-card-basic-description'>{props.description}</p>
        <TweetIconCount
          likeCount={props.likeCount}
          repliesCount={props.repliesCount}
          isLiked={props.isLiked}
        />
      </div>
    </div>
  );
};

export default TweetCardBasic;
