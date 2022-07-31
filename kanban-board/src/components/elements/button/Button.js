import React from 'react';
import './index.css';

const Button = (props) => {
  const { className, onClick, type, text } = props;
  return (
    <button className={['button', className].join(' ')} onClick={onClick} type={type}>{text}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
};