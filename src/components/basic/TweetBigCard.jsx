import React from "react";
import TweetIconCount from "./TweetIconCount";
import TweetUserName2 from "./TweetUserName2";
import UserAvatar from "./UserAvatar";

const TweetBigCard = ({...props})=>{
  return (
    <div className="TweetBigCard">
      <div className="TweetUserInfo">
        <div className="TweetUserInfo-head">
          <UserAvatar 
            avatar={props.user.avatar}
          />
          <TweetUserName2 
            name={props.user.name}
            account={props.user.account}
          />
        </div>
        <p className='tweet-card-basic-description'>
            {props.description}
        </p>
        <p className="tweetDate">{`上午10:05·2021年11月10日`}
        </p>
      </div>

      <div className="TweetUserInfo">
          <span className="TweetUserInfo-replies">
            34 <span>回覆</span>
          </span>
          <span className="TweetUserInfo-likes">
            808 <span>喜歡次數</span>
          </span>
      </div>
      <div className="TweetUserInfo">
        <TweetIconCount />
      </div>

    </div>
  )
}

export default TweetBigCard;