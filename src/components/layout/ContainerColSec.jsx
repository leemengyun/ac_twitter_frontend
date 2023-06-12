import React from 'react';
import SecLeftNav from '../basic/SecLeftNev';
// import Modal from '../basic/Modal';

const ContainerColSec = ({
  children,
  role,
  setModalTweetOpen,
  pageIndex,
  id,
}) => {
  return (
    <>
      {/* bootstrap gutter system needs come after row => row gx-4 */}
      <main className='container_sec'>
        {/* <main className='container_sec grid'> */}
        <SecLeftNav
          role={role}
          setModalTweetOpen={setModalTweetOpen}
          pageIndex={pageIndex}
          id={id}
        />
        {children}
      </main>
      {/* <Modal /> */}
    </>
  );
};

export default ContainerColSec;
