import React, { useEffect } from 'react';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import InputGroup from './InputGroup';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  // using react-form-hook-set-up
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const { login, isAuthentical } = useAuth();
  const navigate = useNavigate();

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
    const success = await login({
      account: data.username,
      password: data.password,
    });
    console.log('Login: ', success);
    // console.log(data);
    reset();
  };

  useEffect(() => {
    if (isAuthentical) {
      navigate('/main');
    }
  }, [navigate, isAuthentical]); //只要isAuthentical或navigation有變化便執行

  return (
    <div className='formLayout login-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group-container'>
          <InputGroup
            name='username'
            label='帳號'
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
        <button className='button-filled button-lg' type='submit'>
          登入
        </button>
        <div className='button-group-row login-button-group'>
          <Link to='/register' className='button-link'>
            註冊
          </Link>
          <span>・</span>
          <Link to='/admin' className='button-link'>
            後台登入
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
