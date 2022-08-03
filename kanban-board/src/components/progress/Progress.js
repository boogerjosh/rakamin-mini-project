import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import './index.css'
import ProgressPercentage from './ProgressPercentage';
import HorizontalDots from './HorizontalDots';

function Progress({ 
  item, index, id, idx, 
  setIndex, todo_id, setModalOpen, 
  setModalTitle, setProgressVal, 
  setTaskName, setId, setTodoId }) {
  
  return (
    <Draggable index={index} draggableId={item.id.toString()}>
        {(provided) => (
          <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps} 
          className='card-item'
          >
              <p className='card-name'>{item.name}</p>
              <div className='line-dashed'></div>
              <div className='progress-count'>
                <ProgressPercentage
                  progress_percentage={item.progress_percentage}
                />
                <HorizontalDots 
                  id={id} 
                  idx={idx} 
                  setIndex={setIndex} 
                  todo_id={todo_id} 
                  setModalOpen={setModalOpen} 
                  setModalTitle={setModalTitle} 
                  name={item.name} 
                  percentageVal={item.progress_percentage} 
                  setProgressVal={setProgressVal} 
                  setTaskName={setTaskName}
                  setId={setId}
                  setTodoId={setTodoId}
                />
              </div>
          </div>
        )}
    </Draggable>
  )
}

export default Progress