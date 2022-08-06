import React, { useEffect, useState } from 'react';
import './index.css';
import InputText from "../input/InputText";
import Button from '../elements/button/Button';
import { useAddItem } from './action';
import { useGetLists } from '../../pages/MainPage/action';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function Modal({ setOpenModal, title, id, name, progressVal, 
  todo_id, formLabel, setLabelForm, formPlaceHolder, setPlaceHolder }) {
  const { getListTodos } = useGetLists();
  const { addItem, editItem, deleteItem, addTodo } = useAddItem();
  const [form, setForm] = useState({
    input1: title == 'Edit Task' ? name : '',
    input2: title == 'Edit Task' ? progressVal : '',
  });

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const newItem = async () => {
    if (title == 'Edit Task') {
      if (form.input1 || form.input2) {
        if (parseInt(form.input2) <= 100) {
          await editItem({form, todo_id, id});
          setOpenModal(false);
          getListTodos();
          setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
          setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
        } else {
          alert('Progress cannot be more than 100%');
        }
      } else {
        alert('Please fill the input');
      }
    } else if (title == 'Create Task') {
      if (form.input1 || form.input2) {
        if (parseInt(form.input2) <= 100) {
          await addItem({ form, id });
          setOpenModal(false);
          getListTodos();
          setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
          setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
        } else {
          alert('Progress cannot be more than 100%');
        }
      } else {
        alert('Please fill the input');
      }
    } else {
      if (form.input1 || form.input2) {
          await addTodo({ form });
          setOpenModal(false);
          getListTodos();
          setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
          setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
      } else {
        alert('Please fill the input');
      }
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
                  setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
                  setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
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
                label={formLabel.label1}
                name="input1"
                placeholder={formPlaceHolder.placeHolder1}
                type="text"
                value={form.input1}
                onChange={_onChange} 
            />
            <InputText
                inputClassName='login-input-2'
                label={formLabel.label2}
                name="input2"
                placeholder={formPlaceHolder.placeHolder2}
                type="text"
                value={form.input2}
                onChange={_onChange} 
            />
          </> }
        <div className="footer">
          {title == 'Delete Task' ? <> <Button text='Cancel' className='btn-cancel' onClick={() => {
              setOpenModal(false);
              setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
              setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
            }} id="cancelBtn" />
          <Button text='Delete' className='btn-delete' id="deleteBtn" onClick={() => {deleteItemBtn()}} />
          </> : <> <Button text='Cancel' className='btn-cancel' onClick={() => {
              setOpenModal(false);
              setLabelForm({ ...formLabel, label1: 'Task Name', label2: 'Progress' });
              setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Task', placeHolder2: '70%' });
            }} id="cancelBtn" />
          <Button text='Save Task' className='btn-save' id="saveBtn" onClick={() => {newItem()}} />
          </>}
        </div>
      </div>
    </div>
  );
  }
  
  export default Modal;
