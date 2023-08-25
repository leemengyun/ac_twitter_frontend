import React from 'react';
import Skeleton from 'react-loading-skeleton';

const UserAvatarSkeleton = () => {
  return (
    <Skeleton
      style={{
        width: '140px',
        height: ' 140px',
        border: '4px solid var(--main-white)',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
};

export default UserAvatarSkeleton;
