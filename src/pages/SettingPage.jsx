import React from 'react';
// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColSec from '../components/layout/ContainerColSec';
// import LoginForm from '../components/forms/LoginForm';

const SettingPage = () => {
  return (
    <>
      <PageLayout>
        <ContainerColSec>
          <div className='main-section-m'>
            <h1> SettingPage</h1>
          </div>
        </ContainerColSec>
      </PageLayout>
    </>
  );
};

export default SettingPage;
