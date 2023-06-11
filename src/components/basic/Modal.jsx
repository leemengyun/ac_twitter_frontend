import { useForm } from 'react-hook-form';

// import component
import ModalContent from './ModalContent';
import UserAvatar from './UserAvatar';
import UserBk from './UserBk';
import InputGroup from '../forms/InputGroup';
import { ModalHeaderIcon } from './ModalHeader';

// @ testing local photo
import testAvatar from '../../assets/images/avatar1.jpg';
//@ testing http photos
const testBk =
  'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

const Modal = ({ setModalProOpen }) => {
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
        <ModalHeaderIcon setModalProOpen={setModalProOpen} />
        <div className='modal-content'>
          <UserBk bkUrl={testBk} />
          <UserAvatar avatar={testAvatar} />
          <form className='modal-info-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-group-container'>
              <InputGroup
                name='username'
                label='名稱'
                type='text'
                placeholder='請輸入帳號'
                maxLength='50'
                errors={errors}
                register={register}
                validationSchema={{
                  required: 'username is required',
                  minLength: {
                    value: 3,
                    message: 'Please enter a minimum of 3 characters',
                  },
                }}
                watch={watch}
                // required
              />
            </div>
            <div className='textarea-group-container'>
              <div className='textarea-group grow-wrap'>
                <label>自我介紹</label>
                <textarea
                  type='textarea'
                  id='description'
                  name='description'
                  {...register('description', {
                    required: true,
                    maxLength: 30,
                  })}
                  placeholder='有什麼新鮮事？'
                  maxLength='30'
                  className='desc-text-area'
                />
              </div>
              <div className='error-message-group'>
                {errors.description &&
                  errors.description.type === 'required' && (
                    <span className='error'>This is required</span>
                  )}
                <span className='limit-num'>
                  {watch('description') ? watch('description').length : '0'}/50
                </span>
              </div>
            </div>
          </form>
        </div>
      </ModalContent>
    </>
  );
};

export default Modal;
