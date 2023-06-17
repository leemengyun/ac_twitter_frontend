import { useForm } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import component
import ModalContent from './ModalContent';
import UserAvatar from './UserAvatar';
import UserBk from './UserBk';
import InputGroup from '../forms/InputGroup';
import { ModalHeaderIcon } from './ModalHeader';

import { getUserInfo, updateUserInfo } from '../../api/userinfo';
import { useAuth } from '../../components/context/AuthContext';

//import svg
import iconCamera from '../../assets/images/icon/addphoto.svg';
import iconClose from '../../assets/images/icon/close.svg';

const defaultBk = 'https://i.imgur.com/ZFz8ZEI.png';
// const defaultAvatar = 'https://i.imgur.com/V4RclNb.png';

const Modal = () => {
  const { isAuthentic, member, setModalProOpen } = useAuth(); // 取出需要的狀態與方法
  const [profile, setProfile] = useState({
    name: '',
    introduction: '',
    avatar: '',
    banner: '',
  });
  const navigate = useNavigate();

  // using react-form-hook-set-up
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: profile.name,
      introduction: profile.introduction,
      avatar: profile.avatar,
      banner: profile.banner,
    },
  });

  //@ 打 /api/users/id
  const getUserInfoAsync = async () => {
    try {
      const profile = await getUserInfo(member.id);
      if (profile) {
        setProfile(profile);
        setImageNewUrl_bk(profile.banner);
        setImageNewUrl(profile.avatar);
      }
    } catch (error) {
      console.error('[getUser Info  with Async failed]', error);
    }
  };

  //儲存form
  const onSubmit = async (data) => {
    // 如果是只要給api
    console.log('we get data', data);
    // reset();
    console.log(member.id);
    try {
      const addData = await updateUserInfo({
        id: member.id,
        data: data,
      });
      if (addData) {
        setModalProOpen(false);
      }
      console.log({ addData });
    } catch (error) {
      console.error('[getUser Info  with Async failed]', error);
    }
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
          //利用空的input可以用 react-hook-form傳出去
          setValue('avatar', e.target.result);
        } else if (curr_target === 'input-file-bk') {
          console.log('bk-file');
          setImageNewUrl_bk(e.target.result);
          //利用空的input可以用 react-hook-form傳出去
          setValue('banner', e.target.result);
        }
      };
      // console.log(file);
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (e) => {
    alert('換回原本背景照片');
    setImageNewUrl_bk(profile.banner ? profile.banner : defaultBk);
    //新設要送出的form value
    setValue('banner', profile.banner ? profile.banner : defaultBk);
  };

  //@ 首次載入profile
  useEffect(() => {
    getUserInfoAsync();
  }, []);

  // @ 首次載入因profile 帳號出不來form要reset
  useEffect(() => {
    reset({ ...profile });
  }, [profile, reset]);

  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]); //只要isAuthentic或navigation有變化便執行

  return (
    <>
      <ModalContent>
        <ModalHeaderIcon
          setModalProOpen={setModalProOpen}
          onSubmit={onSubmit}
        />
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
              onClick={handleImageDelete}
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              ref={imageUploader_bk}
              className='input-file-bk'
              //@ sam 需要的上傳規格 name='banner'
              name='banner'
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
              //@ sam 需要的上傳規格 name='avatar'
              name='avatar'
            />
          </div>

          <form
            className='modal-info-form'
            id='hook-form'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='input-group-container'>
              <InputGroup
                name='name'
                label='名稱'
                type='text'
                placeholder='請輸入帳號'
                maxLength='50'
                errors={errors}
                register={register}
                validationSchema={{
                  required: 'name is required',
                  minLength: {
                    value: 3,
                    message: 'Please enter a minimum of 3 characters',
                  },
                }}
                watch={watch}
                limitLabel={true}
              />
            </div>
            <div className='textarea-group-container'>
              <div className='textarea-group grow-wrap'>
                <label>自我介紹</label>
                <textarea
                  type='textarea'
                  id='introduction'
                  name='introduction'
                  {...register('introduction', {
                    required: true,
                    maxLength: 160,
                  })}
                  placeholder='有什麼新鮮事？'
                  maxLength='160'
                  className={`desc-text-area ${
                    errors.introduction ? 'error' : ''
                  }`}

                  // value={profile.introduction || ''}
                />
              </div>
              <div className='error-message-group'>
                {errors.introduction &&
                  errors.introduction.type === 'required' && (
                    <span className='error'>This is required</span>
                  )}
                <span className='limit-num'>
                  {watch('description') ? watch('description').length : '0'}/160
                </span>
              </div>
            </div>

            <input
              type='text'
              {...register('banner')}
              style={{
                display: 'none',
              }}
            />
            <input
              type='text'
              {...register('avatar')}
              style={{
                display: 'none',
              }}
            />
          </form>
        </div>
      </ModalContent>
    </>
  );
};

export default Modal;
