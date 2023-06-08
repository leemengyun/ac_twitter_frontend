import React from "react";
import Defaultavatar from '../../assets/images/icon/avatar.svg'


const UserAvatar = ({avatr}) =>{
    return (
      <>
        <div className='avatar'>
          <img
            src={avatr || Defaultavatar}
            alt='userAvatar'
            className='user-avatar'
          />
        </div>
      </>
    )
  }

  export default UserAvatar;