import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useGetLists } from './action';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragDropComp from './DragDropComp';
import { fetchTodos } from './action';

const MainPages = () => {
  const {
    mainPage: { lists } 
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className='main-page'>
      {lists ? <DragDropComp lists={lists} /> : <div>nothing</div>}
    </div>
  );
};

export default MainPages;