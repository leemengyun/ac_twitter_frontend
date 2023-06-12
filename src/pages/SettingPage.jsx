import React from 'react';
import { useEffect } from 'react';

// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import SettingForm from '../components/forms/SettingForm';
import { HeaderMain } from '../components/basic/Header';
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SettingPage = ({ setModalTweetOpen }) => {
  const { isAuthentical, currentMember } = useAuth(); // 取出需要的狀態與方法
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentical) {
      navigate('/login');
    }
  }, [navigate, isAuthentical]); //只要isAuthentical或navigation有變化便執行

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        pageIndex={2}
        {...currentMember}
      >
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
