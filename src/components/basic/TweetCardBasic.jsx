
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";


const TweetCardBasic = ({...props})=>{
  const value ={
    id: props.id,
    userId: props.id,
  }

const TweetCardBasic = ({ ...props }) => {
  return (
    <div className='tweet-card-basic'>
      <UserAvatar 
      avatar={props.user.avatar}
      {...value}
      onClick={({id})=>{
        props.onClick?.({id})
      }}
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
  //6/9 15:12 衝突 確認後刪除
//       <UserAvatar avatar={props.avatar} />
//       <div className='tweet-card-left-info'>
//         <TweetUserName3
//           name={props.name}
//           account={props.account}
//           time={props.time}
//         />
//         <p className='tweet-card-basic-description'>{props.description}</p>
//         <TweetIconCount
//           likeCount={props.likeCount}
//           replyCount={props.repliesCount}

        />
      </div>
    </div>
  );
};

export default TweetCardBasic;
