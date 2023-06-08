import React, { useState } from 'react';
//nested router - need Link and Outlet

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabThreeGroup } from '../components/basic/Tab';

import FollowCardList from '../components/FollowCardList';
import ReplyLists from './self/ReplyLists';
import TweetsLists from './self/TweetsLists';
import LikeLists from './self/LikeLists';

const SelfPage = () => {
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
      <ContainerColSec>
        <section className='section-outer-m  col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='John Doe' userTweetsLength='25' />
            <h1>UserCard</h1>
            <TabThreeGroup
              // handleTabChange={handleTabChange}
              setTabIndex={setTabIndex}
            />
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
    </>
  );
};

export default SelfPage;
