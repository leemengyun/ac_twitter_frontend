import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName2 from './TweetUserName2';

const FollowCard = ({...props}) => {
  // console.log(props)
  return (
    <div className='follow-card'>
      <UserAvatar avatar={props.avatar} />
      <TweetUserName2 name={props.name} account={props.account} />
      <button className='button-md button-m' type='submit'>
        跟蹤
      </button>
    </div>
  );
};

export default FollowCard;

