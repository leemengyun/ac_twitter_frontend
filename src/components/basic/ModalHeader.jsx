import React from 'react';

// import svg
import iconClose from '../../assets/images/icon/close.svg';

const ModalHeader = ({ setModalTweetOpen }) => {
  return (
    <>
      <div className='modal-header'>
        <img
          src={iconClose}
          alt='icon of close button'
          className='icon-close'
          onClick={() => {
            setModalTweetOpen(false);
          }}
        />
      </div>
    </>
  );
};
const ModalHeaderIcon = ({ setModalProOpen }) => {
  return (
    <>
      <div className='modal-header modal-header-with-btn'>
        <img
          src={iconClose}
          alt='icon of close button'
          className='icon-close'
          onClick={() => setModalProOpen(false)}
        />
        <h5>編輯個人資料</h5>
        <button className='button-md button-m active' type='submit'>
          儲存
        </button>
      </div>
    </>
  );
};
export { ModalHeader, ModalHeaderIcon };