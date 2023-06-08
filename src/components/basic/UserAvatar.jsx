import React from 'react';
import Defaultavatar from '../../assets/images/icon/avatar.svg';

const UserAvatar = ({ avatar }) => {
  return (
    <>
      <div className='avatar'>
        <img
          src={avatar || Defaultavatar}
          alt='userAvatar'
          className='user-avatar'
        />
      </div>
    </>
  );
};

export default UserAvatar;
