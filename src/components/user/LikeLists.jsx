import React, { useEffect,useState } from 'react';
import { getUserLikedTweets } from '../../api/twitter';
import TweetCardLike from '../basic/TweetCardLike';
import { useAuth } from '../context/AuthContext';

const LikeLists = ({ pathId, onClick,onToggleLike }) => {
  const [userLiked,setUserLiked] = useState([])
  const {
    like,
    handleChangeLikeMode
  } = useAuth();

  useEffect(()=>{
    const getUserLikedTweetsAsync = async()=>{
      try{
        const data = await getUserLikedTweets(pathId)
        setUserLiked(data)
      }catch(error){
        console.log(error)
      }
    }
    getUserLikedTweetsAsync()
  },[like])


  return (
    <div className='TweetLists'>
      {userLiked.map((tweet)=>{
        return <TweetCardLike 
          key={tweet.id}
          {...tweet}
          onClick={({tweetId,userId})=>{
            onClick?.({tweetId,userId})
          }}
          onToggleLike={handleChangeLikeMode }
        />
   })}
    </div>
  );
};

export default LikeLists;
