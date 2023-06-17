import React from 'react';
import UserAvatar from './UserAvatar';
import TweetUserName3 from './TweetUserName3';
// import TweetIconCount from './TweetIconCount';
// import { useNavigate } from 'react-router-dom';
import iconClose from '../../assets/images/icon/close.svg';

const defaultAvatar = 'https://i.imgur.com/V4RclNb.png';

const TweetCardAdmin = ({
  id,
  description,
  UserId,
  User,
  // onHandleClick,
  onDelete,
  tweetId,
  setTweetId,
}) => {
  // const handleClick = (tweetId) => {
  //   tweetId && navigate(`/main/tweet/${tweetId}`);
  // };

  return (
    <div className='tweet-card-basic tweet-card-admin'>
      <UserAvatar avatar={User.avatar} userId={UserId} />
      <div className='tweet-card-left-info'>
        <div className='icon-inner-wrap'>
          <TweetUserName3 name='Apple' account='apple' time='3小時' />

          <img
            src={iconClose}
            alt='cross icon'
            onClick={() => {
              onDelete?.(id);
              console.log(id);
            }}
          />
        </div>

        <p className='tweet-card-basic-description'>{description}</p>
      </div>
    </div>
  );
};

export default TweetCardAdmin;
