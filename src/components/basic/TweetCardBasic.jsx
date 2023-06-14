
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";
import { useNavigate } from "react-router-dom";


const TweetCardBasic = ({ ...props }) => {
  const tweetId = props.id


  return (
    <div className='tweet-card-basic' onClick={()=>props.onClick?.({tweetId})}>
      <UserAvatar 
      avatar={props.User.avatar}
      userId={props.UserId}
      onClick={({userId})=>{
        props.onClick?.({userId})
      }}
      />
      <div className='tweet-card-left-info'>
        <TweetUserName3 
          name={props.User.name} 
          account={props.User.account} 
          time={props.createdAt}
        />
          <p className='tweet-card-basic-description'>
            {props.description}
          </p>
          <TweetIconCount 
            likesCount={props.likesCount} 
            repliesCount={props.repliesCount}
            isLiked={props.isLiked}
          />
      </div>
    </div>
  );
};

export default TweetCardBasic;
