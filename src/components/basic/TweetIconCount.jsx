import React from "react";
import like from '../../assets/images/icon/like-filled.svg'
import reply from '../../assets/images/icon/reply.svg'
import likefilled from '../../assets/images/icon/like.svg'
import clsx from "clsx";
const TweetIconCount =({likesCount,repliesCount,isLiked}) => {
    return(
      <div className='tweet-card-icon-count'>
          <div className='tweet-card-reply-count'>
            <img src={reply} alt='reply' className='reply-icon'
            />
            <span className='tweet-count'>
              {repliesCount}
            </span>
          </div>
          <div className='tweet-card-like-count'>
           <img src={isLiked ?  likefilled : like} alt='like' className={`${clsx('', {active: isLiked})} like-icon`}
           />
          <span className = 'tweet-count' >
            {likesCount}
          </span>
        </div>
      </div>
    )
  }

  export default TweetIconCount;