import React from 'react';
// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColSec from '../components/layout/ContainerColSec';
// import SecLeftNev from '../components/SecLeftNev';

const AdminPage = () => {
  return (
    <>
      <PageLayout>
        <ContainerColSec>
          <div className='main-section-m'>
            <h1> AdminPage</h1>
          </div>
        </ContainerColSec>
      </PageLayout>
    </>
  );
};

export default AdminPage;
