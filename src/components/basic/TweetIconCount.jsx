import React from "react";
import like from '../../assets/images/icon/like-filled.svg'
import reply from '../../assets/images/icon/reply.svg'

const TweetIconCount =({likeCount,repliesCount}) => {
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
           <img src={like} alt='like' className='like-icon'
           />
          <span className='tweet-count'>
            {likeCount}
          </span>
        </div>
      </div>
    )
  }

  export default TweetIconCount;