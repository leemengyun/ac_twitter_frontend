import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";


const TweetCardBasic = ({...props})=>{
  return (
    <div className='tweet-card-basic'>
      <UserAvatar avatr={props.user.avatar}
      />
      <div className='tweet-card-left-info'>
      <TweetUserName3 
        name={props.user.name} 
        account={props.user.account} 
        time={props.time}
      />
        <p className='tweet-card-basic-description'>
          {props.description}
        </p>
        <TweetIconCount 
          likeCount={props.likeCount} 
          repliesCount={props.repliesCount}
        />
      </div>
    </div>
  )
}

export default TweetCardBasic;