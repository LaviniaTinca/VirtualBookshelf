import React from 'react';

const FormInput = ({ type, name, required, minLength, maxLength, min, max, step, handleChange, handleFocus, handleBlur }) => {
  const commonProps = {
    className: 'form-control',
    name: name,
    required: required,
    'aria-required': required,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  const numberProps = {
    type: 'number',
    min: min,
    max: max,
    step: step,
  };

  const textProps = {
    type: 'text',
    minLength: minLength,
    maxLength: maxLength,
  };

  const inputProps = type === 'number' ? { ...commonProps, ...numberProps } : { ...commonProps, ...textProps };

  return (
    <div className={`formbuilder-text form-group field-${name}`}>
      <label htmlFor={name} className="formbuilder-text-label">
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <span className="formbuilder-required">*</span>
      </label>
      <input id={name} {...inputProps} />
    </div>
  );
};

export default FormInput;
