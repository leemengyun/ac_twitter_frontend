import React from 'react';

import { ModalHeader, ModalHeaderIcon } from './ModalHeader';

// import svg
// import iconClose from '../../assets/images/icon/close.svg';

import UserAvatar from './UserAvatar';
import UserBk from './UserBk';

// @ testing local photo
import testAvatar from '../../assets/images/avatar1.jpg';
//@ testing http photos
const testBk =
  'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

const Modal = ({ setModalOpen }) => {
  return (
    <>
      <div className='modal-outer-container modal-transparent-bk'>
        <div className='modal-flex-box'>
          <div className='modal-container'>
            <ModalHeaderIcon setModalOpen={setModalOpen} />
            <div className='modal-content'>
              <UserBk bkUrl={testBk} />
              <UserAvatar avatar={testAvatar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
