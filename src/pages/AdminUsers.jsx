import React from 'react';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
// import SecLeftNav from '../components/SecLeftNav';

const AdminUsers = () => {
  return (
    <>
      <ContainerColSec role='admin'>
        <div className='section-outer-l col-10'>
          <div className='section-main-l'>
            <h1>Users</h1>
          </div>
        </div>
      </ContainerColSec>
    </>
  );
};

export default AdminUsers;
