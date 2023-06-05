import React from 'react';

const ContainerColSec = ({ children }) => {
  return (
    <>
      <div className='row'>
        <main className='container_sec col-12'>{children}</main>
      </div>
    </>
  );
};

export default ContainerColSec;
