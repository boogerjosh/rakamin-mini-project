import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoById } from '../MainPage/action';

const Items = ({ id }) => {
  const {
    mainPage: { listById } 
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [dispatch]);

  return (
    <>
      {listById ? listById.map((list) => <div key={list.id}>todo</div>) : <div>nothing</div>}
     {/* { listById.length ? listById.map(idx => {
      return (
        <div key={idx.id} className='task-column'>
          <p className='task-text'>{idx.name}</p>
        </div>
      )
     }) : <div>
            <p >No Data</p>
          </div>} */}
    </>
  );
};

export default Items;