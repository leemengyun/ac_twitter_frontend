import React from "react";
import TweetUserName3 from "./TweetUserName3";
import UserAvatar from "./UserAvatar";


const ReplyModal = ({...props})=>{
  return (
    <div className='tweet-card-basic'>
      <UserAvatar avatar={props.userAvatar} />
      <div className='tweet-card-left-info'>
        <TweetUserName3
          name={props.userName}
          account={props.userAccount}
          time={props.time}
        />
        <p className='tweet-card-basic-description'>{props.description}</p>
        <p className='tweet-card-basic-reply'>
          回覆給
          <span className='reply-user-account'>@{props.user.account}</span>
        </p>
      </div>
    </div> 
  )
}
//回覆的帳號相同


export default ReplyModal;