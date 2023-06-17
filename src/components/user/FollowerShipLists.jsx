import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  cancelFollow,
  getUserFollower,
  getUserFollowing,
  userFollowing,
} from '../../api/twitter';
import { useState } from 'react';
import FollowShipCard from '../basic/FollowShipCard';

const FollowerShipLists = ({ tabIndex }) => {
  const { member } = useAuth();
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);

  const handleUserIsFollowing = async ({ userId, isfollowing }) => {
    console.log(isfollowing);
    console.log(userId);
      try {
        if (!isfollowing) {
          await userFollowing(userId);
        } else {
          await cancelFollow(userId);
        }
      } catch (error) {
        console.log(error);
      }
    
  };

  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '1':
        return following.map((user) => {
          return (
            <FollowShipCard
              key={user.id}
              {...user}
              isfollowing={true}
              onClick={handleUserIsFollowing}
            />
          );
        });
      default:
        return follower.map((user) => {
          return (
            <FollowShipCard
              key={user.id}
              {...user}
              onClick={handleUserIsFollowing}
            />
          );
        });
    }
  }

  useEffect(() => {
    const getUserFollowerAsync = async () => {
      const data = await getUserFollower(member.id);
      setFollower(data);
    };
    const getUserFollowingAsync = async () => {
      const data = await getUserFollowing(member.id);
      setFollowing(data);
    };
    getUserFollowerAsync();
    getUserFollowingAsync();
  }, [handleUserIsFollowing]);

  return (
    <>
      <div className="TweetLists">{switchContext(tabIndex)}</div>
    </>
  );
};

export default FollowerShipLists;
