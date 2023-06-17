import React from 'react';
import UserAvatar from './UserAvatar';
import clsx from 'clsx';





const FollowShipCard = ({...props}) => {

  return (
    <div className="follow-ship-card">
      <div className="tweet-card-basic">
        <UserAvatar
          avatar={props.avatar}
          userId={props.id}
          onClick={({ userId }) => {
            props.onClick?.({ userId });
          }}
        />
        <div className="tweet-card-left-info">
          <div className="tweet-username-2">
            <span className="user-name">{props.name}</span>
            <span
              className="follow-card-button"
              onClick={() => props.onClick?.({userId:props.id,isfollowing:props.isfollowing})}
            >
              <button
                className={`${clsx('', {
                  active: props.isfollowing,
                })} button-md button-m`}
                type="submit"
              >
                {props.isfollowing ? '正在跟隨' : '跟蹤'}
              </button>
            </span>
          </div>
          <p className="tweet-card-basic-description">{props.introduction}</p>
        </div>
      </div>
    </div>
  );
};

export default FollowShipCard;
