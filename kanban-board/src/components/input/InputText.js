import React, { useState } from 'react';
import './index.css';

const InputText = (props) => {
    const onChange = (e) => {
        const target = {
          target: {
            name: props.name,
            value: e.target.value
          }
        };

        if (props.type) {
            props.onChange(target);
        }
    };

    return (
      <div className='input-text'>
        {props.label && <label className='label' htmlFor={props.name}>{props.label}</label>}
        <div className='input-group'>
            { 
              props.type
              &&
              <input
                 className={['form-control', 'form-control-custom', props.inputClassName].join(' ')}
                 disabled={props.disabled}
                 id={props.name}
                 name={props.name}
                 placeholder={props.placeholder}
                 type={props.type}
                 value={props.value}
                 onChange={onChange}
              /> 
            }
        </div>
      </div>
    );
  };
  
  export default InputText;
  
  InputText.defaultProps = {
    label: '',
    placeholder: 'Please type here...',
    type: '',
    value: '',
  };
