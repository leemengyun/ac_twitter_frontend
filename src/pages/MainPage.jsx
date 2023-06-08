import React from 'react';
//nested router - need Link and Outlet

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderMain } from '../components/basic/Header';
import FollowCardList from '../components/FollowCardList';

const MainPage = () => {
  return (
    <>
      <ContainerColSec role='user'>
        <section className='section-outer-m col-7'>
          <div className='section-main-m '>
            <HeaderMain pageTitle='首頁' />
            <h1>輸入tweet區塊</h1>
            <h1>卡片lists</h1>
          </div>
        </section>
        <section className='section-right col-3'>
          <FollowCardList />
        </section>
      </ContainerColSec>
    </>
  );
};

export default MainPage;
