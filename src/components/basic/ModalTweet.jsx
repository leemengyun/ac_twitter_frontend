// import { useForm } from 'react-hook-form';

// import component
import ModalContent from './ModalContent';
// import UserAvatar from './UserAvatar';
// import InputGroup from '../forms/InputGroup';
import { ModalHeader } from './ModalHeader';
import TweetCardForm from '../forms/TweetCardForm';
// @ testing local photo
// import testAvatar from '../../assets/images/avatar1.jpg';

const ModalTweet = ({ setModalTweetOpen, handleAddTweets }) => {
  // using react-form-hook-set-up
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  //   watch,
  // } = useForm();

  // @ 0613新增tweet
  // @ 但api與送出資料不太對應，會造成下方tweetLists無法render
  // const onModalAddTweet = async (data) => {
  //   alert('submit ModlaTsodos');
  //   console.log(data);
  //   // try {
  //   //   const addData = await createTweet({
  //   //     UserId: profile.id,
  //   //     description: data.description,
  //   //   });

  //   //   setTweets([
  //   //     ...tweets,
  //   //     {
  //   //       // id: data.id, //我今天嘗試打他都會自己帶id
  //   //       UserId: addData.UserId,
  //   //       description: addData.description,
  //   //     },
  //   //   ]);
  //   // } catch (error) {
  //   //   console.log(`[createData failed]`);
  //   // }
  // };

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   // onModalAddTweet(data);
  //   reset();
  // };

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
