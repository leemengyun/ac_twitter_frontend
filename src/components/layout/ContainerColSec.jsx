import React from 'react';
import SecLeftNev from '../SecLeftNev';

const ContainerColSec = ({ children }) => {
  return (
    <>
      <div className='row'>
        <main className='container_sec col-12'>
          <SecLeftNev />
          {children}
        </main>
      </div>
    </>
  );
};

export default ContainerColSec;
