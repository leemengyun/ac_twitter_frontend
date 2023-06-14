// import { useForm } from 'react-hook-form';

// import component
import ModalContent from './ModalContent';
// import UserAvatar from './UserAvatar';
// import InputGroup from '../forms/InputGroup';
import { ModalHeader } from './ModalHeader';
import ReplyCardForm from '../forms/ReplyCardForm';
// @ testing local photo
// import testAvatar from '../../assets/images/avatar1.jpg';
import ReplyCard from './ReplyCard'
import { useEffect, useState } from 'react';
import { getTweet } from '../../api/twitter';
import { useAuth } from '../context/AuthContext';
 const ModalReply = () => {
  const [tweetInfo, setTweetInfo] = useState({
    id: '',
    UserId: '',
    description: '',
    createdAt: '',
    User: {},
    Likes:{},
    replies:{},
    updatedAt: ''
  });
   const { isAuthentic, currentMember,setModalReplyOpen,tweetId } = useAuth();
  
  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const data = await getTweet(tweetId);
        setTweetInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTweetAsync();
  }, []);
  
  return (
    <>
      <ModalContent>
        <ModalHeader setModalReplyOpen={setModalReplyOpen} />
        <div className='modal-content modal-reply-content'>
          <div className='tweet-reply-wrapper'>
            <ReplyCard 
              tweetInfo={tweetInfo}
            />
          </div>
          <div className='tweet-form-wrapper'>
            <ReplyCardForm avatar={currentMember.avatar}/>
          </div>
        </div>
      </ModalContent>
    </>
  );
};

export default ModalReply;
