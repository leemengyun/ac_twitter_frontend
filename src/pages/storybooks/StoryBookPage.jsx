import React from 'react';
// import custom components
import PageLayout from '../../components/layout/PageLayout';

//import css
import '../../scss/components/storyBookPage.scss';
import Defaultavatar from '../../assets/images/icon/avatar.svg'
import Url from '../../assets/images/icon/chat.svg'
const LayoutNav = () => {


  
  const UserAvatar = ({imgURL,Default}) =>{
    return (
      <>
        <div className='avatar'>
          <img
            src={imgURL || Default}
            alt='userAvatar'
            className='user_avatar'
          />
        </div>
      </>
    )
  }

  const TweetUserName3 = ({name, account , time})=>{
    return (
      <>
        <div className='tweet_username_3'>
          <span className='user_name'>{name}</span>
          <span className='user_account'>@{account}</span>
          <span className='user_time'> ·{time}小時</span>
        </div>
      </>
    )
  }

  const TweetUserName2 = ({name, account})=>{
    return (
      <>
        <div className='tweet_username_2'>
          <span className='user_name'>{name}</span>
          <span className='user_account'>@{account}</span>
        </div>
      </>
    )
  }



  return (
    <>
      <div className='storybook-layout'>
    <UserAvatar 
        Default={Defaultavatar}
        imgURL={' https://media.licdn.com/dms/image/D5603AQGmA1K4ud_M1g/profile-displayphoto-shrink_400_400/0/1675331260718?e=1691625600&v=beta&t=eR4xDwl0gMzApYrYmf92cOOy8575nA9mrUlZZxvb2Ys'}
        />
        <TweetUserName3
        name={'印度歐爸'}
        account={'currycurry'}
        time={3}
        />
        <UserAvatar 
        Default={Defaultavatar}
        imgURL={'https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.rsocial.w1200.jpg'}
        />
        <TweetUserName2
        name={'James'}
        account={'TEOFW'}
        />
        <div className='storybook-container'>
          <h2>Storybooks</h2>
          <h4 className='page-sec-title'>
            === Buttons-元件本身目前沒有製作上下margin，是本表顯示用 ===
          </h4>

          <div className='flex_col_cc comp-container'>
            <button className='button-filled button-lg' type='submit'>
              登入
            </button>
            <button className='button-sm button-m active' type='submit'>
              推文
            </button>
            <button className='button-bg button-m active' type='submit'>
              儲存
            </button>
            <button className='button-md button-m active' type='submit'>
              正在追蹤
            </button>
            <button className='button-md button-m' type='submit'>
              編輯個人資料
            </button>
            <a className='button-link' type='submit'>
              取消
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutNav;
