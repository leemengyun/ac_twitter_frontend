import React from 'react';
import UserAvatar from './UserAvatar';
import UserBk from './UserBk';
// import TweetCardBasic from './TweetCardBasic';

// import svg
// @ testing local photo
import testAvatar from '../../assets/images/avatar1.jpg';
import iconPost from '../../assets/images/icon/post.svg';
import iconLike from '../../assets/images/icon/like.svg';
// import iconMessage from '../../assets/images/icon/message.svg';
// import iconNotice from '../../assets/images/icon/notice.svg';

//@ testing http photos
const testBk =
  'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

const ProfileMiniCard = () => {
  return (
    <>
      <div className='profile-mini-card'>
        <UserBk bkUrl={testBk} />
        <UserAvatar avatar={testAvatar} />
        <div className='profile-info'>
          <h5 className='user-name'>John Doe</h5>
          <p className='user-account'>@heyjohn</p>
        </div>
        <div className='user-tweet-info'>
          <div className='user-card-post-count'>
            <img src={iconPost} alt='post' className='icon-post' />
            <span className='tweet-count'>1.5k</span>
          </div>
          <div className='user-card-like-count'>
            <img src={iconLike} alt='like' className='icon-like' />
            <span className='tweet-count'>20k</span>
          </div>
        </div>
        <div className='user-follow-info'>
          <p>
            34 個 <span>跟隨中</span>
          </p>
          <p>
            59 位<span>跟隨者</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileMiniCard;
