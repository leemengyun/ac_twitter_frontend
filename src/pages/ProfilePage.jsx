import React from 'react';
// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColSec from '../components/layout/ContainerColSec';

const ProfilePage = () => {
  return (
    <>
      <PageLayout>
        <ContainerColSec>
          <div className='main-section-lg'>
            <h1>ProfilePage</h1>
          </div>
          <div className='follow-lists-container'></div>
        </ContainerColSec>
      </PageLayout>
    </>
  );
};

export default ProfilePage;
