import React from "react";
import DayTime from "../../helper/TimeHelper";
import TweetIconCount from "./TweetIconCount";
import TweetUserName2 from "./TweetUserName2";
import UserAvatar from "./UserAvatar";

const TweetBigCard = ({tweetInfo})=>{
  return (
    <div className="TweetBigCard">
      <div className="TweetUserInfo">
        <div className="TweetUserInfo-head">
          <UserAvatar 
            avatar={tweetInfo.User.avatar}
          />
          <TweetUserName2 
            name={tweetInfo.User.name}
            account={tweetInfo.User.account}
          />
        </div>
        <p className='tweet-card-basic-description'>
            {tweetInfo.description}
        </p>
        <p className="tweetDate">{DayTime(tweetInfo.createdAt)}
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