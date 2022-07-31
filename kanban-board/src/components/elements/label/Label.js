import React from 'react';
import './index.css';

const Label = (props) => {
  const { title } = props;
  return (
    <div className='label-container'>
        <div>
          <p>{title}</p>
        </div>
    </div>
  );
};

export default Label;

Label.defaultProps = {
  title: '',
};