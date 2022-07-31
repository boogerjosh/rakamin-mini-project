import React, { useEffect, useState } from 'react';
import Label from '../../components/elements/label/Label';
import './index.css';

const MainPages = () => {

  return (
    <div className='main-page'>
      <div className='card-container'>
        <Label
          title='Group Task 1'
        />
        <h3 className='month-schedule-text'>January - March</h3>
        <div className='task-column'>
          <p className='task-text'>No Task</p>
        </div>
        <div className='new-task-button'>
          <div className='plus-circle'>
            <span className='text-plus-circle'>+</span>
          </div>
          <p className='button-text'>New Task</p>
        </div>
      </div>
    </div>
  );
};

export default MainPages;