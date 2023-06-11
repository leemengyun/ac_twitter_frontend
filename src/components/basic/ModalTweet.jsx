import { useForm } from 'react-hook-form';

// import component
import ModalContent from './ModalContent';
// import UserAvatar from './UserAvatar';
// import InputGroup from '../forms/InputGroup';
import { ModalHeader } from './ModalHeader';
import TweetCardForm from '../forms/TweetCardForm';
// @ testing local photo
// import testAvatar from '../../assets/images/avatar1.jpg';

const ModalTweet = ({ setModalTweetOpen }) => {
  // using react-form-hook-set-up
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    // 如果是只要給api
    // 就在這設定 person,再給api,不需要setState
    console.log(data);
    reset();
  };

  return (
    <>
      <ModalContent>
        <ModalHeader setModalTweetOpen={setModalTweetOpen} />
        <div className='modal-content modal-tweet-content'>
          <div className='tweet-form-wrapper'>
            <TweetCardForm />
          </div>
        </div>
      </ModalContent>
    </>
  );
};

export default ModalTweet;
