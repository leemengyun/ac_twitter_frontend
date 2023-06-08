import React from 'react';
import SecLeftNav from '../basic/SecLeftNev';

const ContainerColSec = ({ children, role }) => {
  return (
    <>
      {/* bootstrap gutter system needs come after row => row gx-4 */}
      <main className='container_sec'>
        {/* <main className='container_sec grid'> */}
        <SecLeftNav role={role} />
        {children}
      </main>
    </>
  );
};

export default ContainerColSec;
