
import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName3 from "./TweetUserName3";
import TweetIconCount from "./TweetIconCount";
import { useNavigate } from "react-router-dom";


const TweetCardLike = ({ ...props }) => {
  const navigate = useNavigate();
  const handleClick = (tweetId)=>{
    tweetId && navigate(`/main/tweet/${tweetId}`);
  }


  return (
    <div
      className="tweet-card-basic"
      onClick={(e) => {
        handleClick(props.TweetId);
        e.stopPropagation();
      }}
    >
      <UserAvatar
        avatar={props.Tweet.User.avatar}
        userId={props.UserId}
        onClick={({ userId }) => {
          props.onClick?.({ userId });
        }}
      />
      <div className="tweet-card-left-info">
        <TweetUserName3
          name={props.Tweet.User.name}
          account={props.Tweet.User.account}
          time={props.Tweet.createdAt}
        />
        <p className="tweet-card-basic-description">
          {props.Tweet.description}
        </p>
        <TweetIconCount
          likesCount={props.likesCount}
          repliesCount={props.repliesCount}
          isLike={true}
          id={props.TweetId}
          UserId={props.UserId}
          onToggleLike={({ id, isLike, UserId }) => {
            props.onToggleLike?.({ id, isLike, UserId });
          }}
        />
      </div>
    </div>
  );
};

export default TweetCardLike;
