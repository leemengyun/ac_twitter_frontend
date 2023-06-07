import React from 'react';
//nested router - need Link and Outlet

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';

const MainPage = () => {
  return (
    <>
      <ContainerColSec>
        <div className='main-section-lg'>
          <h1>MainPage</h1>
        </div>
        <div className='follow-lists-container'></div>
      </ContainerColSec>
    </>
  );
};

export default MainPage;
