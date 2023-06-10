import React from 'react';
import UserAvatar from './UserAvatar';
import UserBk from './UserBk';
// import TweetCardBasic from './TweetCardBasic';

// import svg
// @ testing local photo
import testAvatar from '../../assets/images/avatar1.jpg';
import iconMessage from '../../assets/images/icon/message.svg';
import iconNotice from '../../assets/images/icon/notice.svg';

//@ testing http photos
// const testBk =
//   'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

const ProfileCard = ({
  userInfo,
  name,
  account,
  introduction,
  avatar,
  banner,
  followersCount,
  followingsCount,
}) => {
  console.log(userInfo);
  return (
    <>
      <div className='profile-card'>
        <UserBk bkUrl={banner} />
        <UserAvatar avatar={avatar} />
        <div className='profile-btn-group'>
          <img
            src={iconMessage}
            alt='icon of message'
            className='icon-round icon-message icon-round cursor-point'
          />
          <img
            src={iconNotice}
            alt='icon of Notice'
            className='icon-round icon-notice icon-round cursor-point'
          />
          <button className='button-md button-m' type='submit'>
            編輯個人資料
          </button>
        </div>
        <div className='profile-info'>
          <h5 className='user-name'>{name}</h5>
          <p className='user-account'>@{account}</p>
          <p className='user-desc'>{introduction}</p>
        </div>
        <div className='user-follow-info'>
          <p>
            {followersCount} 個 <span>跟隨中</span>
          </p>
          <p>
            {followingsCount} 位<span>跟隨者</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
