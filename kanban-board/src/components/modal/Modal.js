import React, { useEffect, useState } from 'react';
import './index.css';
import InputText from "../input/InputText";
import Button from '../elements/button/Button';
import { useAddItem } from './action';
import { useGetLists } from '../../pages/MainPage/action';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function Modal({ setOpenModal, title, id, name, progressVal, todo_id }) {
  const { getListTodos } = useGetLists();
  const { addItem, editItem, deleteItem } = useAddItem();
  const [form, setForm] = useState({
    taskName: title == 'Edit Task' ? name : '',
    progress: title == 'Edit Task' ? progressVal : '',
  });

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const newItem = async () => {
    if (title == 'Edit Task') {
      await editItem({form, todo_id, id});
      setOpenModal(false);
      getListTodos();
    } else {
      await addItem({ form, id });
      setOpenModal(false);
      getListTodos();
    }
  };

  const deleteItemBtn = async () => {
      await deleteItem({todo_id, id});
      setOpenModal(false);
      getListTodos();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-title">
          {title == 'Delete Task' ? <div className="titleDelete">
            <div className='icon'>
              <WarningAmberIcon className='icon-delete'/>
            </div>
              <p className='delete-text'>{title}</p>
          </div> : <div className="title">
              {title}
          </div>}
          <div className="titleCloseBtn">
            <CloseIcon onClick={() => {
                  setOpenModal(false);
              }}/>
              {/* <button
              onClick={() => {
                  setOpenModal(false);
              }}
              >
              x
              </button> */}
          </div>
        </div>
        {title == 'Delete Task' ? <div>
              <p className='body-delete-text'>Are you sure want to delete this task? your action can’t be reverted.</p>
          </div> : <>
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
          </> }
        <div className="footer">
          {title == 'Delete Task' ? <> <Button text='Cancel' className='btn-cancel' onClick={() => {
              setOpenModal(false);
            }} id="cancelBtn" />
          <Button text='Delete' className='btn-delete' id="deleteBtn" onClick={() => {deleteItemBtn()}} />
          </> : <> <Button text='Cancel' className='btn-cancel' onClick={() => {
              setOpenModal(false);
            }} id="cancelBtn" />
          <Button text='Save Task' className='btn-save' id="saveBtn" onClick={() => {newItem()}} />
          </>}
        </div>
      </div>
    </div>
  );
  }
  
  export default Modal;
