import React, { useState } from 'react';
//nested router - need Link and Outlet

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabThreeGroup } from '../components/basic/Tab';

import FollowCardList from '../components/user/FollowCardList';
import ReplyLists from '../components/user/ReplyLists';
import TweetsLists from '../components/user/TweetsLists';
import LikeLists from '../components/user/LikeLists';
import ProfileCard from '../components/basic/ProfileCard';
// import Modal from '../components/basic/Modal';

const UserPage = ({ modalOpen, setModalOpen }) => {
  const [tabIndex, setTabIndex] = useState('0');

  //swtich case 與 if else概念相同，但return component更簡潔(??)
  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '1':
        return <LikeLists />;
      case '2':
        return <TweetsLists />;
      default:
        return <ReplyLists />;
    }
  }

  console.log(tabIndex);

  return (
    <>
      <ContainerColSec modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <section className='section-outer-m  col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='John Doe' userTweetsLength='25' />

            {/* <h1>UserCard</h1> */}
            <ProfileCard />
            <TabThreeGroup setTabIndex={setTabIndex} />

            {switchContext(tabIndex)}
            {/* {tabIndex === '0' && <ReplyLists />}
            {tabIndex === '1' && <LikeLists />}
            {tabIndex === '2' && <TweetsLists />} */}
          </div>
        </section>
        <section className='section-right col-3'>
          <FollowCardList />
        </section>
      </ContainerColSec>
      {/* <Modal /> */}
    </>
  );
};

export default UserPage;
