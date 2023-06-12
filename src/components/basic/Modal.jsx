import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';

// import component
import ModalContent from './ModalContent';
import UserAvatar from './UserAvatar';
import UserBk from './UserBk';
import InputGroup from '../forms/InputGroup';
import { ModalHeaderIcon } from './ModalHeader';
//import svg
import iconCamera from '../../assets/images/icon/addphoto.svg';
import iconClose from '../../assets/images/icon/close.svg';
// import iconCamera from '../../assets/images/icon/addphoto.svg';

// @ testing local photo
// import testAvatar from '../../assets/images/avatar1.jpg';
//@ testing http photos
// const testBk =
//   'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

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

  //upload photo
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const imageUploader_bk = useRef(null);
  const [imageNewUrl, setImageNewUrl] = useState('');
  const [imageNewUrl_bk, setImageNewUrl_bk] = useState('');

  const handleImageUpload = (e) => {
    console.log(e.target.className);
    let curr_target = 'input-file-avatar';
    if (e.target.className === 'input-file-bk') {
      curr_target = 'input-file-bk';
    }

    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        // current.src = e.target.result;
        // console.log(current)
        // console.log(e.target.class)
        if (curr_target === 'input-file-avatar') {
          setImageNewUrl(e.target.result);
        } else if (curr_target === 'input-file-bk') {
          console.log('bk-file');
          setImageNewUrl_bk(e.target.result);
        }
      };
      // console.log(file)
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ModalContent>
        <ModalHeaderIcon setModalProOpen={setModalProOpen} />
        <div className='modal-content'>
          <div className='profile-bk-wrapper'>
            <UserBk bkUrl={imageNewUrl_bk} />
            <img
              alt='bk-camera'
              src={iconCamera}
              className='icon-camera'
              ref={uploadedImage}
              onClick={() => imageUploader_bk.current.click()}
            />
            <img
              src={iconClose}
              alt='icon of close button'
              className='icon-close'
              onClick={() => alert('換回原本照片')}
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              ref={imageUploader_bk}
              className='input-file-bk'
            />
          </div>

          <div className='avatar-edit-wrapper'>
            <UserAvatar avatar={imageNewUrl} />
            <img
              alt='bbb'
              src={iconCamera}
              className='icon-camera'
              ref={uploadedImage}
              onClick={() => imageUploader.current.click()}
            />

            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              ref={imageUploader}
              className='input-file-avatar'
            />
          </div>

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
