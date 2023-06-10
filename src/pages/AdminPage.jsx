import React from 'react';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
// import SecLeftNav from '../components/SecLeftNav';

const AdminPage = () => {
  return (
    <>
      <ContainerColSec role='admin' pageIndex={0}>
        <div className='section-outer-l col-10'>
          <div className='section-main-l'>
            <h1> AdminPage</h1>
          </div>
        </div>
      </ContainerColSec>
    </>
  );
};

export default AdminPage;
