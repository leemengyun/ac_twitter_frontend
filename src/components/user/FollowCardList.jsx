import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopUsers } from '../../api/twitter';
import FollowCard from '../basic/FollowCard';
import { useAuth } from '../context/AuthContext';
import FollowCardSkeleton from '../skeleton/FollowCardSkeleton';

const FollowCardList = ({ setPathId }) => {
  const [users, setUsers] = useState([]);
  const { member, userIsFollowing } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClickCard = ({ userId }) => {
    userId === member.id
      ? navigate(`/user/${userId}`)
      : userId !== undefined && navigate(`/other/${userId}`);
    setPathId(userId);
  };

  const getUsersInitialAsync = async () => {
    setIsLoading(true);
    try {
      const data = await getTopUsers();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getUsersAsync = async () => {
    try {
      const data = await getTopUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //initial render
  useEffect(() => {
    getUsersInitialAsync();
  }, []);

  // render when userIsFollowing changing
  useEffect(() => {
    getUsersAsync();
  }, [userIsFollowing]);

  return (
    <>
      <div className='follow-list-container'>
        <div className='title-secondary'>
          <h4>推薦跟隨</h4>
        </div>
        {isLoading && <FollowCardSkeleton cards={8} />}
        {!isLoading &&
          users.map((user) => {
            return (
              <FollowCard key={user.id} {...user} onClick={handleClickCard} />
            );
          })}
      </div>
    </>
  );
};

export default FollowCardList;
