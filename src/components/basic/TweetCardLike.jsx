
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";


const TweetCardLike = ({ ...props }) => {
  // const value ={
  //   tweetId: props.id,
  //   userId: props.UserId,
  // }
  return (
    <div className='tweet-card-basic' onClick={()=>{
      props.onClick?.({tweetId: props.id})
      }}>
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
          time={props.Tweet.createdAt}
        />
          <p className='tweet-card-basic-description'>
            {props.Tweet.description}
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

export default TweetCardLike;
