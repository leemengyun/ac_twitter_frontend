import React from 'react';
import SecLeftNav from '../basic/SecLeftNev';
// import Modal from '../basic/Modal';

const ContainerColSec = ({ children, role, modalOpen, setModalOpen }) => {
  return (
    <>
      {/* bootstrap gutter system needs come after row => row gx-4 */}
      <main className='container_sec'>
        {/* <main className='container_sec grid'> */}
        <SecLeftNav
          role={role}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        {children}
      </main>
      {/* <Modal /> */}
    </>
  );
};

export default ContainerColSec;
