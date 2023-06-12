import React from 'react';
import { useState, useEffect } from 'react';
import Defaultavatar from '../../assets/images/icon/avatar.svg';

const UserAvatar = ({ avatar, onClick, id, userId }) => {
  const defaultAvatarUrl = Defaultavatar;
  // @ 用來測試照片閃爍,但還沒有側server就掛掉了
  // const [isLoading, setIsLoading] = useState(true);
  // const [imageSource, setImageSource] = useState(defaultAvatarUrl);

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = avatar;
  //   image.onload = () => {
  //     setIsLoading(false);
  //     setImageSource(avatar);
  //   };
  //   image.onerror = () => {
  //     setIsLoading(false);
  //   };
  // }, [avatar]);
  // @ ----------------- 用來測試照片閃爍,但還沒有側server就掛掉了

  return (
    <>
      <div
        className='avatar'
        onClick={(e) => {
          onClick?.({ userId });
          e.stopPropagation();
          //因為在最內層點擊事件 外層有相對應的事件 也會跟著觸發 因此加入e.stopPropagation()來避免外層觸發的可能
        }}
      >
        {/* // @ 用來測試照片閃爍,但還沒有側server就掛掉了 */}

        {/* {isLoading ? (
          <img
            src={defaultAvatarUrl}
            alt='userAvatar'
            className='user-avatar'
          />
        ) : (
          <img src={imageSource} alt='userAvatar' className='user-avatar' />
        )} */}

        {/* // -------------@ 用來測試照片閃爍,但還沒有側server就掛掉了 */}

        <img
          src={avatar || defaultAvatarUrl}
          alt='userAvatar'
          className='user-avatar'
        />
      </div>
    </>
  );
};

export default UserAvatar;
