import React from 'react';

// import svg
// import iconBack from '../../assets/images/icon/back.svg';

const TabThreeGroup = ({ setTabIndex }) => {
  return (
    <div className='tab-group'>
      <div className='tab active' onClick={() => setTabIndex('0')}>
        推文
      </div>
      <div className='tab' onClick={() => setTabIndex('1')}>
        回覆
      </div>
      <div className='tab' onClick={() => setTabIndex('2')}>
        喜歡的內容
      </div>
    </div>
  );
};

const TabTwoGroup = () => {
  return (
    <div className='tab-group'>
      <div className='tab active' tabIndex='0'>
        追蹤者
      </div>
      <div className='tab' tabIndex='1'>
        正在追隨
      </div>
    </div>
  );
};

export { TabThreeGroup, TabTwoGroup };
