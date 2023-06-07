import React from 'react';

import { Link } from 'react-router-dom';

// import svg
// import iconHome from '../assets/images/icon/home.svg';

const LeftNev = () => {
  return (
    <>
      <div className='nav-container'>
        <nav>
          <div className='menu'>
            <div className='menu-link'>
              <Link to='/main'>
                <span className='nav-icon icon-home active'></span>
                首頁
              </Link>
              <a href='/profile'>個人資料</a>
              <a href='/setting'>設定</a>
              <a href='/login'>登出</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LeftNev;
