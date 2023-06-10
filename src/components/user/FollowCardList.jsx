import React from 'react';
import { useEffect,useState  } from 'react';
import { getTopUsers } from '../../api/twitter';
import FollowCard from '../basic/FollowCard'
// import iconLogo from '../assets/images/icon/logo.svg';
// import svg
// import iconHome from '../assets/images/icon/home.svg';

const FollowCardList = () => {
const [users,setUsers] = useState([]);
  
   useEffect(()=>{
      const getUsersAsync = async()=>{
         try{
            const data = await getTopUsers()
            setUsers(data.users)
         }catch(error){
            console.log(error)
         }
      }
      getUsersAsync()
   },[])

  return (
    <>
      <div className='follow-list-container'>
        <div className='title-secondary'>
          <h4>推薦跟隨</h4>
        </div>
         {users.map((user)=>{
            return <FollowCard 
            key={user.id}
            {...user}
            />
         })}
      </div>
    </>
  );
};

export default FollowCardList;
