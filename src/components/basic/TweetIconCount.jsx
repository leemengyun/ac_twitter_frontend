import React, { useState } from "react";
import like from '../../assets/images/icon/like-filled.svg'
import reply from '../../assets/images/icon/reply.svg'
import likefilled from '../../assets/images/icon/like.svg'
import clsx from "clsx";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { likeTweet, unlikeTweet } from "../../api/twitter";
const TweetIconCount =({likesCount,repliesCount,isLike,id,onToggleLike}) => {
    const { setModalReplyOpen,setTweetId} = useAuth();
    // const [Like,setIsLike] = useState(isLike)
    // const handleClickLike = async(e)=>{
    //   setIsLike(!Like)
    //   if(!Like){
    //     await likeTweet(id)
    //   }else{
    //     await unlikeTweet(id)
    //   }
    // }

   
    return(
      <div className='tweet-card-icon-count'>
          <div className='tweet-card-reply-count' onClick={(e)=>{ 
            setTweetId(id)
            setModalReplyOpen(true)
            e.stopPropagation()
            }}>
            <img src={reply} alt='reply' className='reply-icon'
            />
            <span className='tweet-count'>
              {repliesCount}
            </span>
          </div>
          <div className='tweet-card-like-count' onClick={(e)=>{onToggleLike?.({id,isLike});e.stopPropagation()}}>
           <img src={isLike ?  likefilled : like } alt='like' className={`${clsx('', {active: isLike})} like-icon`}
           />
          <span className = 'tweet-count' >
            {likesCount}
          </span>
        </div>
      </div>
    )
  }

  export default TweetIconCount;