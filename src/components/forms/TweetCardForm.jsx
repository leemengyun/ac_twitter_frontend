import React from 'react';
import { useForm } from 'react-hook-form';

// import InputGroup from './InputGroup';
import UserAvatar from '../basic/UserAvatar';
import testAvatar from '../../assets/images/avatar1.jpg';

const TweetCardForm = () => {
  // using react-form-hook-set-up
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = (data) => {
    // 如果是只要給api
    // 就在這設定 person,再給api,不需要setState
    // const person = {
    //   username: data.username,
    //   password: data.password,
    // };
    alert('成功繳交');
    console.log(data);
    reset();
  };

  return (
    <>
      <div className='formLayout tweet-card-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group-inner-wrapper'>
            <UserAvatar avatar={testAvatar} />
            <div className='textarea-group-container'>
              <div className='grow-wrap'>
                <textarea
                  type='textarea'
                  id='tweetarea'
                  name='tweetarea'
                  // aria-invalid={errors.tweetarea ? 'true' : 'false'}
                  {...register('tweetarea', {
                    required: true,
                    maxLength: 250,
                  })}
                  placeholder='有什麼新鮮事？'
                  maxLength='250'
                  className='tweet-text-area'
                  // ref={textAreaRef}
                  // onChange={onChange}
                  // rows={1}
                />
              </div>
            </div>
          </div>
          <div>
            {errors.tweetarea && errors.tweetarea.type === 'required' && (
              <span className='error'>This is required</span>
            )}
            <button className='button-md button-m active' type='submit'>
              推文
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TweetCardForm;
