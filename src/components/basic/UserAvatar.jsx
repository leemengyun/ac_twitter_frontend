import React from 'react';
import Defaultavatar from '../../assets/images/icon/avatar.svg';

const UserAvatar = ({avatar,onClick,id,userId}) =>{
    return (
      <>
        <div className='avatar' onClick={()=>{onClick?.({userId})}}>
          <img
            src={avatar || Defaultavatar}
            alt='userAvatar'
            className='user-avatar'
          />
        </div>
      </>
    )
  }

 export default UserAvatar;

