import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName2 from './TweetUserName2';
import clsx from 'clsx';

const FollowCard = ({...props}) => {
  return (
    <div className='follow-card'>
      <UserAvatar avatar={props.avatar} />
      <TweetUserName2 name={props.name} account={props.account} />
      <button className={`${clsx('', {active: props.isfollowging}) } button-md button-m`} type='submit'>
        {props.isfollowging ? '正在跟隨' : '跟蹤'}
      </button>
    </div>
  );
};

export default FollowCard;

