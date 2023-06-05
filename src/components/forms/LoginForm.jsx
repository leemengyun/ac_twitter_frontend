import React from 'react';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputGroup from './InputGroup';

const LoginForm = () => {
  // using react-form-hook-set-up
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // 如果是只要給api
    // 就在這設定 person,再給api,不需要setState
    // const person = {
    //   username: data.username,
    //   password: data.password,
    // };
    console.log(data);
    reset();
  };

  return (
    <div className='formLayout col-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group-container'>
          <InputGroup
            name='username'
            label='帳號'
            type='text'
            placeholder='請輸入帳號'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'username is required',
              minLength: {
                value: 3,
                message: 'Please enter a minimum of 3 characters',
              },
              maxLength: {
                value: 50,
                message: 'Please enter a max of 50 characters',
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
      </form>
    </div>
  );
};

export default LoginForm;
