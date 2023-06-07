import React from 'react';
import iconLogo from '../assets/images/icon/logo.svg';
import { Link } from 'react-router-dom';

// import svg
// import iconHome from '../assets/images/icon/home.svg';

const LeftNev = () => {
  return (
    <>
      <div className='nav-container'>
        <nav>
          <div className='menu'>
            <img
              src={iconLogo}
              alt='Alphitter Icon'
              className='icon-logo cursor-point'
            />
            <div className='menu-link'>
              <div className='menu-link-items'>
                <Link to='/main' >
                  <span className='nav-icon icon-home'></span>
                  首頁
                </Link>
                <Link to='/profile' >
                  <span className='nav-icon icon-user '></span>
                  個人資料
                </Link>
                <Link to='/setting' >
                  <span className='nav-icon icon-setting'></span>
                  設定
                </Link>
                <button className='button-filled button-lg' type='submit'>
                推文
                </button>
              </div>
              <div className='menu-link-logout'>
                <Link to='/login' >
                  <span className='nav-icon icon-logout '></span>
                  登出
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LeftNev;
