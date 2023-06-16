import React from 'react';

const InputGroup = ({
  name,
  label,
  type,
  placeholder,
  errors,
  register,
  maxLength,
  // required,
  validationSchema,
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
          placeholder={placeholder}
          {...register(name, validationSchema)}
          maxLength={maxLength || null}
        />
      </div>
      <div className='error-message-group'>
        {errors && errors[name]?.type === 'required' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'minLength' && (
          <span className='error'>{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'pattern' && (
          <span className='error'>{errors[name]?.message}</span>
        )}

        {/* <span className='limit-num'>15/50</span> */}
        <span className='limit-num'>
          {watch(name) ? watch(name).length : '0'}/50
        </span>
      </div>
    </>
  );
};

export default InputGroup;
