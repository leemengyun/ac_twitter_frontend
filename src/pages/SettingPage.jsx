import React from 'react';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import SettingForm from '../components/forms/SettingForm';
import { HeaderMain } from '../components/basic/Header';

const SettingPage = () => {
  return (
    <>
      <ContainerColSec pageIndex={2}>
        <section className='section-outer-m col-7'>
          <div className='section-main-m'>
            <HeaderMain pageTitle='帳戶設定' />
            <SettingForm />
          </div>
        </section>
      </ContainerColSec>
    </>
  );
};

export default SettingPage;
