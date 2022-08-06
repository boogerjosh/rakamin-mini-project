import React from 'react';
import './index.css';
import DialogMenu from '../dialogMenu/DialogMenu';

function HorizontalDots({ 
  id, idx, setIndex, 
  todo_id, setModalOpen, setModalTitle, 
  setProgressVal, setTaskName, 
  name, percentageVal, setId, setTodoId, bIndex}) {
  const handleSetIndex = (id) => {
    if (idx === id) setIndex(false);
    else idx !== id && setIndex(id);
  };
  return (
    <div className='button-three-dots'>
      <div className="horizontal-dots" onClick={() => {
          handleSetIndex(id);
        }}>
          <span></span>
          <span></span>
          <span></span>
      </div>
      {/* <DialogMenu /> */}
      {idx === id && (
        <DialogMenu 
          bIndex={bIndex}
          id={id} 
          todo_id={todo_id} 
          setModalOpen={setModalOpen} 
          setModalTitle={setModalTitle} 
          setProgressVal={setProgressVal} 
          setTaskName={setTaskName} 
          name={name}
          percentageVal={percentageVal}
          setId={setId}
          setTodoId={setTodoId}
          setIndex={setIndex}
          />
      )}
    </div>
  )
}

export default HorizontalDots