
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";


const TweetCardBasic = ({ ...props }) => {
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
          time={'2023-06-10T03:29:40.000Z'}
        />
          <p className='tweet-card-basic-description'>
            {props.description}
          </p>
          <TweetIconCount 
            likeCount={props.likeCount} 
            repliesCount={props.repliesCount}
            isLiked={props.isLiked}
          />
      </div>
    </div>
  );
};

export default TweetCardBasic;
