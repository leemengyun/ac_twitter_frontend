import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputGroup from './InputGroup';

const RegisterForm = () => {
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
    // const person = {
    //   username: data.username,
    //   password: data.password,
    // };
    if (data.username.length === 0) {
      return;
    }
    if (data.password.length === 0) {
      return;
    }

    console.log(data);
    reset();
  };

  return (
    <div className='formLayout register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group-container'>
          <InputGroup
            name='account'
            label='帳號'
            type='text'
            placeholder='請輸入帳號'
            maxLength='50'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'account is required',
              minLength: {
                value: 3,
                message: 'Please enter a minimum of 3 characters',
              },
            }}
            watch={watch}
            // required
          />
        </div>
        <div className='input-group-container'>
          <InputGroup
            name='username'
            label='名稱'
            type='text'
            placeholder='請輸入名稱'
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

        <div className='input-group-container'>
          <InputGroup
            name='email'
            label='Email'
            type='email'
            placeholder='請輸入Email'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            // required
            watch={watch}
          />
        </div>

        <div className='input-group-container'>
          <InputGroup
            name='password'
            label='密碼'
            type='password'
            placeholder='請輸入密碼'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'password is required',
              minLength: {
                value: 8,
                message: 'Please enter a minimum of 8 characters',
              },
            }}
            // required
            watch={watch}
          />
        </div>

        <div className='input-group-container'>
          <InputGroup
            name='cpassword'
            label='密碼再確認'
            type='password'
            placeholder='請再次輸入密碼'
            errors={errors}
            register={register}
            validationSchema={{
              //@ 確認密碼做法？ (還沒有試)
              //https://www.positronx.io/add-confirm-password-validation-in-react-with-hook-form/
              required: 'password is required',
              minLength: {
                value: 8,
                message: 'Please enter a minimum of 8 characters',
              },
            }}
            // required
            watch={watch}
          />
        </div>
        <div className='button-group-column'>
          <button className='button-filled button-lg' type='submit'>
            登入
          </button>
          <Link to='/login' className='button-link'>
            取消
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;