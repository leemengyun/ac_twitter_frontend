import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName2 from './TweetUserName2';
import clsx from 'clsx';

const FollowCard = ({...props}) => {
  return (
    <div className='follow-card'>
        <div className='follow-card-info'>
        <UserAvatar avatar={props.avatar} />
        <TweetUserName2 name={props.name} account={props.account} />
      </div>
      <div className='follow-card-button'>
        <button className={`${clsx('', {active: props.isFollowing}) } button-md button-m`} type='submit'>
          {props.isFollowing ? '正在跟隨' : '跟蹤'}
        </button>
      </div>
    </div>
  );
};

export default FollowCard;

