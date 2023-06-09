import React from 'react';
import DefaultBk from '../../assets/images/bk.jpg';

const UserBk = ({ bkUrl }) => {
  return (
    <>
      <div className='profile-bk-clip'>
        <img
          src={bkUrl || DefaultBk}
          alt='mountain pic'
          className='profile-bk-image'
        />
      </div>
    </>
  );
};

export default UserBk;
