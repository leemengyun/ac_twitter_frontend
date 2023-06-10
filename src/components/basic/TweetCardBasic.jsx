
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";


const TweetCardBasic = ({ ...props }) => {
  const value ={
    id: props.id,
    userId: props.id,
  }
  return (
    <div className='tweet-card-basic' onClick={()=>{
      props.onClick?.({id: props.id})
      }}>
      <UserAvatar 
      avatar={props.user.avatar}
      {...value}
      onClick={({id,userId})=>{
        props.onClick?.({id,userId})
      }}
      />
      <div className='tweet-card-left-info'>
        <TweetUserName3 
          name={props.user.name} 
          account={props.user.account} 
          time={'2023-06-10T03:29:40.000Z'}
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
  );
};

export default TweetCardBasic;
