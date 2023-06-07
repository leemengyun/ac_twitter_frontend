import React from 'react';
//nested router - need Link and Outlet

// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColSec from '../components/layout/ContainerColSec';

const MainPage = () => {
  return (
    <>
      <PageLayout>
        <ContainerColSec>
          <div className='main-section-lg'>
            <h1>MainPage</h1>
          </div>
          <div className='follow-lists-container'></div>
        </ContainerColSec>
      </PageLayout>
    </>
  );
};

export default MainPage;
