import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLikedTweets } from '../../api/twitter';
import TweetCardLike from '../basic/TweetCardLike';
import { useAuth } from '../context/AuthContext';

const LikeLists = ({ pathId, tabIndex, setPathId}) => {
  const [userLiked, setUserLiked] = useState([]);
  const navigate = useNavigate();
  const { like, handleChangeLikeMode, member } = useAuth();

  const handleClickCard = ({ userId }) => {
    userId === member.id
      ? navigate(`/user/${userId}`)
      : userId !== undefined && navigate(`/other/${userId}`);
    setPathId(userId);
  };

  useEffect(() => {
    const getUserLikedTweetsAsync = async () => {
      try {
        const data = await getUserLikedTweets(pathId);
        setUserLiked(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserLikedTweetsAsync();
  }, [like, pathId]);

  return (
    <div className="TweetLists">
      {userLiked.map((tweet) => {
        return (
          <TweetCardLike
            key={tweet.id}
            {...tweet}
            tabIndex={tabIndex}
            onClick={handleClickCard}
            onToggleLike={handleChangeLikeMode}
          />
        );
      })}
    </div>
  );
};

export default LikeLists;
