import React from 'react';

// import svg
import iconLogo from '../assets/images/icon/logo.svg';

// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColOne from '../components/layout/ContainerColOne';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <>
      <PageLayout>
        <ContainerColOne>
          <div className='page-logo'>
            <img
              src={iconLogo}
              alt='Alphitter Icon'
              className='icon-logo cursor-point'
            />
          </div>
          <h3 className='page-title'>登入 Alphitter</h3>
          <LoginForm />
        </ContainerColOne>
      </PageLayout>
    </>
  );
};

export default LoginPage;
