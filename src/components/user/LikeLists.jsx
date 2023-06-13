import React, { useEffect,useState } from 'react';
import { getUserLikedTweets } from '../../api/twitter';
import TweetCardLike from '../basic/TweetCardLike';

const LikeLists = ({ pathId, onClick }) => {
  const [userLiked,setUserLiked] = useState([])
  
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
  },[])


  return (
    <div className='TweetLists'>
      <h1>Nested TweetsLists</h1>
 update/main
      {userLiked.map((tweet)=>{
        return <TweetCardLike 
          key={tweet.id}
          {...tweet}
          onClick={({tweetId,userId})=>{
            onClick?.({tweetId,userId})
          }}
        />
   })}
    </div>
  );
};

export default LikeLists;
