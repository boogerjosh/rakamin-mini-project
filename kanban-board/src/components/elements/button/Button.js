import React from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';

const Button = (props) => {
  const { className, onClick, type, text } = props;
  return (
    <>
    { text == "Add New Group" ? (<button className={['button', className].join(' ')} onClick={onClick} type={type}>
        <AddIcon className='icon-btn-add'/>
        {text}
      </button>) : <button className={['button', className].join(' ')} onClick={onClick} type={type}>{text}</button>}
    </>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
};