import React from 'react';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderMain } from '../components/basic/Header';

import ProfileMiniCard from '../components/basic/ProfileMiniCard';

const AdminUsers = () => {
  return (
    <>
      <ContainerColSec role='admin' pageIndex={1}>
        <div className='section-outer-l col-10'>
          <div className='section-main-l'>
            <HeaderMain pageTitle='使用者列表' />
            <div className='admin-user-wrapper'>
              <ProfileMiniCard /> <ProfileMiniCard /> <ProfileMiniCard />{' '}
              <ProfileMiniCard /> <ProfileMiniCard /> <ProfileMiniCard />{' '}
              <ProfileMiniCard /> <ProfileMiniCard />
            </div>
          </div>
        </div>
      </ContainerColSec>
    </>
  );
};

export default AdminUsers;
