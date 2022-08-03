import React, { useEffect, useState } from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMoveItem } from './action';
import { useGetLists } from '../../pages/MainPage/action';
import { useSelector } from 'react-redux';

function DialogMenu({id, todo_id, setModalOpen, setModalTitle, setProgressVal, setTaskName, name, percentageVal, setId, setTodoId, setIndex}) {
  const { moveItem } = useMoveItem();
  const { getListTodos } = useGetLists();
  const {
    mainPage: { boardDatas } 
  } = useSelector((state) => state);
  const editItem = () => {
    setIndex(false);
    setTodoId(todo_id);
    setId(id);
    setModalOpen(true);
    setProgressVal(percentageVal);
    setTaskName(name);
    setModalTitle('Edit Task')
  };
  const deleteItem = () => {
    setIndex(false);
    setTodoId(todo_id);
    setId(id);
    setModalOpen(true);
    setModalTitle('Delete Task')
  };
  const moveRightItem = async () => {
    let targettodoId = 0;
    let start = 0, end = boardDatas.length - 1;
    while (start < end) {
      if (boardDatas[start].id == todo_id) {
        targettodoId = boardDatas[start + 1].id;
        break;
      }
      start++;
    }
    setIndex(false);
    await moveItem({name, targettodoId, id, todo_id});
    getListTodos();
  };
  const moveLeftItem = async () => {
    let targettodoId = 0;
    let start = 0, end = boardDatas.length;
    while (start < end) {
      if (boardDatas[start].id == todo_id) {
        targettodoId = boardDatas[start - 1].id;
        break;
      }
      start++;
    }
    setIndex(false);
    await moveItem({name, targettodoId, id, todo_id});
    getListTodos();
  };

  return (
      <div className='menu-dialog'>
          <div className='content' onClick={() => {
          moveRightItem();
        }}>
            <div className='icon'>
              <ArrowForwardIcon className='content-icon'/>
            </div>
            <p className='content-text'>Move Right</p>
          </div>
          { todo_id > 1 && <div className='content' onClick={() => {
          moveLeftItem();
        }}>
            <div className='icon'>
              <ArrowBackIcon className='content-icon'/>
            </div>
            <p className='content-text'>Move Left</p>
          </div> }
          <div className='content' onClick={() => {
          editItem();
        }}>
            <div className='icon'>
              <BorderColorIcon className='content-icon'/>
            </div>
            <p className='content-text'>Edit</p>
          </div>
          <div className='content' onClick={() => {
          deleteItem();
        }}>
            <div className='icon'>
              <DeleteIcon className='content-icon'/>
            </div>
            <p className='content-text'>Delete</p>
          </div>
      </div>
  )
}

export default DialogMenu