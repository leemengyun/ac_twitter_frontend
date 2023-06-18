import React from 'react';

const InputGroup = ({
  name,
  label,
  type,
  placeholder,
  errors,
  register,
  maxLength,
  limitLabel = null,
  // required,
  validationSchema,
  defaultValue,
  watch,
}) => {
  return (
    <>
      {' '}
      <div className='input_group'>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, validationSchema)}
          maxLength={maxLength || null}
          className={errors[name] ? 'error' : ''}
        />
      </div>
      <div className='error-message-group'>
        {errors && errors[name]?.type === 'required' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'minLength' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'maxLength' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'pattern' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {limitLabel === 'true' && (
          <span className='limit-num'>
            {watch(name) ? watch(name).length : '0'}/50
          </span>
        )}
      </div>
    </>
  );
};

export default InputGroup;
