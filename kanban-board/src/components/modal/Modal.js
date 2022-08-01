import React, { useEffect, useState } from 'react';
import './index.css';
import InputText from "../input/InputText";
import Button from '../elements/button/Button';

function Modal({ setOpenModal, title }) {
  const [form, setForm] = useState({
    taskName: '',
    progress: ''
  });

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-title">
          <div className="title">
              {title}
          </div>
          <div className="titleCloseBtn">
              <button
              onClick={() => {
                  setOpenModal(false);
              }}
              >
              x
              </button>
          </div>
        </div>
        <InputText
            inputClassName='login-input'
            label="Task Name"
            name="taskName"
            placeholder="Type ur Task"
            type="text"
            value={form.taskName}
            onChange={_onChange} 
        />
        <InputText
            inputClassName='login-input-2'
            label="Progress"
            name="progress"
            placeholder="70%"
            type="text"
            value={form.progress}
            onChange={_onChange} 
        />
        <div className="footer">
          <Button text='Cancel' className='btn-cancel' onClick={() => {
              setOpenModal(false);
            }} id="cancelBtn" />
          <Button text='Save Task' className='btn-save' id="saveBtn" />
        </div>
      </div>
    </div>
  );
  }
  
  export default Modal;
