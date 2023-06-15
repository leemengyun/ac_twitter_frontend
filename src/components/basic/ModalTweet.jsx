// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

// import component
import ModalContent from './ModalContent';
import { ModalHeader } from './ModalHeader';
import TweetCardForm from '../forms/TweetCardForm';
// import api
import { getUserInfo } from '../../api/userinfo';
import { getTweets, createTweet } from '../../api/twitter';
import { useAuth } from '../../components/context/AuthContext';

const ModalTweet = ({ handleAddTweets }) => {
  const [profile, setProfile] = useState({});
  const { member, modalReplyOpen, modalTweetOpen, setModalTweetOpen } =
    useAuth(); // 取出需要的狀態與方法

  // @ 新增tweet
  const onModalAddTweet = async (data) => {
    // alert('submit ModlaTsodos');
    // console.log(data);
    try {
      const addData = await createTweet({
        UserId: member.id,
        description: data.description,
      });
      // if (addData) {
      setModalTweetOpen(!modalTweetOpen);
      // }
      console.log({ modalTweetOpen });

      // console.log({ addData });
    } catch (error) {
      console.log(`[createData failed]`, error);
    }
  };

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const data = await getUserInfo(member.id);
        setProfile(data);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };
    getUserInfoAsync();
  }, []);

  console.log({ modalTweetOpen });

  return (
    <>
      <ModalContent>
        <ModalHeader setModalTweetOpen={setModalTweetOpen} />
        <div className='modal-content modal-tweet-content'>
          <div className='tweet-form-wrapper'>
            <TweetCardForm
              avatar={profile.avatar}
              onModalAddTweet={onModalAddTweet}
            />
          </div>
        </div>
      </ModalContent>
    </>
  );
};

export default ModalTweet;
