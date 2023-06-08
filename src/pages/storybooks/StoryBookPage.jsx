import React from 'react';
// import custom components
import { Link } from 'react-router-dom';
import { TabThreeGroup, TabTwoGroup } from '../../components/basic/Tab';

//import css
import '../../scss/components/storyBookPage.scss';
import Defaultavatar from '../../assets/images/icon/avatar.svg'
import Url from '../../assets/images/icon/chat.svg'
import like from '../../assets/images/icon/like-filled.svg'
import reply from '../../assets/images/icon/reply.svg'
const LayoutNav = () => {


  
  const UserAvatar = ({imgURL,Default}) =>{
    return (
      <>
        <div className='avatar'>
          <img
            src={imgURL || Default}
            alt='userAvatar'
            className='user-avatar'
          />
        </div>
      </>
    )
  }

  const TweetUserName3 = ({name, account , time})=>{
    return (    
        <div className='tweet-username-3'>
          <span className='user-name'>
            {name}
          </span>
          <span className='user-account'>
            @{account}
          </span>
          <span className='user-time'> ·{time}小時</span>
        </div>
    )
  }

  const TweetUserName2 = ({name, account})=>{
    return (
        <div className='tweet-username-2'>
          <span className='user-name'>
            {name}
          </span>
          <span className='user-account'>
            @{account}
          </span>
        </div>
    )
  }

  const TweetIconCount =({likeCount,replyCount}) => {
    return(
      <div className='tweet-card-icon-count'>
          <div className='tweet-card-reply-count'>
            <img src={reply} alt='reply' className='reply-icon'
            />
            <span className='tweet-count'>
              {replyCount}
            </span>
          </div>
          <div className='tweet-card-like-count'>
           <img src={like} alt='like' className='like-icon'
           />
          <span className='tweet-count'>
            {likeCount}
          </span>
        </div>
      </div>
    )
  }

  const user = {
      name: 'Jamessssssssss',
      id: 1,
      account:'TEOFWssssss',
      time:20,
      imgUrl:'https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.rsocial.w1200.jpg',
      description:"A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel.A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel.",
      likeCount: 76,
      replyCount: 85,
      otherUser:{
        id:2,
        name: 'Alyssa',
        account: 'TEOFW'
      }
    }
  

const TweetCardBasic = ({...props})=>{

  return (
    <div className='tweet-card-basic'>
      <UserAvatar imgURL={props.imgUrl}
      />
      <div className='tweet-card-left-info'>
      <TweetUserName3 
        name={props.name} 
        account={props.account} 
        time={props.time}
      />
        <p className='tweet-card-basic-description'>
          {props.description}
        </p>
        <TweetIconCount 
          likeCount={props.likeCount} 
          replyCount={props.replyCount}
        />
      </div>
    </div>
  )
}

//自己的回覆 卡片名自己 回覆名別人
//別人的回覆 卡片名別人 回覆名tweet用戶
//username id description account date time count avatar
//reply other user : name account description time avatar
 
const TweetCardReply = ({...props})=>{
  return (
   <div className='tweet-card-basic'>
      <UserAvatar imgURL={props.imgUrl}
      />
      <div className='tweet-card-left-info'>
        <TweetUserName3 
          name={props.name} 
          account={props.account} 
          time={props.time}
        />
        <p className='tweet-card-basic-reply'>
          回覆
          <span className='reply-user-account'>
           @{props.otherUser.account}
          </span>
        </p>
        <p className='tweet-card-basic-description'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

const TweetCardfollowing = ({...props})=> {
  return (
     <div className='tweet-card-basic'>
      <UserAvatar imgURL={props.imgUrl}
      />
      <div className='tweet-card-left-info'>
        <div className='tweet-card-name-btn'>
          <TweetUserName3 
            name={props.name} 
            account={props.account} 
            time={props.time}
          />
          <span className='tweet-card-btn'>
            <button className='button-md button-m active' type='submit'>
              正在追蹤
            </button>
          </span>
        </div>  
        <p className='tweet-card-basic-description'>
          {props.description}
        </p>
        <TweetIconCount 
          likeCount={props.likeCount} 
          replyCount={props.replyCount}
        />
      </div>
    </div>
  )
}
//點擊tweet 跳出reply list 資料{該推文的user,reply:{usersInfo}} 

const FollowCardList = ()=>{
  return (
    <div className='follow-card'>
      <UserAvatar 
        Default={Defaultavatar}
        imgURL={'https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.rsocial.w1200.jpg'}
      />
      <TweetUserName2
        name={'Jamessssss'}
        account={'TEOFWsssss'}
      /> 
      <button className='button-md button-m' type='submit'>
              跟蹤
      </button>
    </div>
  )
}
  return (
    <>
      <div className='storybook-layout'>
        <TweetCardfollowing {...user}/>
      <FollowCardList />
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
            <Link className='button-link' type='submit'>
              取消
            </Link>
          </div>

          <h4 className='page-sec-title'>
            === tabs -元件本身綁定切換內容，這頁的tab 點了會壞不要管他lol ===
          </h4>
          <TabThreeGroup />
          <TabTwoGroup />
        </div>
      </div>
    </>
  );
};

export default LayoutNav;
