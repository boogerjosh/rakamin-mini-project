import React, { useEffect, useState } from 'react';
import './index.css';
import Label from '../../components/elements/label/Label';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Items from '../Items/Items';
import { useDispatch, useSelector } from 'react-redux';

const DragDropComp = ({ lists }) => {
  // console.log(lists);
  // const newData = JSON.stringify(lists);
  // console.log(newData, '<<');
  const [btnTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const _newtask = () => {
    setModalOpen(true);
    setModalTitle('Create Task')
  };

  return (
    <>
     {loading ? <div>Loading...</div> :  
      <DragDropContext>
        <div className='cointainer-tasks'>
          {lists.map((list, index) => {
            if (list.items === undefined) {
              console.log('no key items:', JSON.stringify(list));
            }
            return (
              <div key={index} className='card-container'>
                <Label
                  title={list.title}
                />
                <h3 className='month-schedule-text'>{list.description}</h3>
                {list.items.map((item, index) => {
                  return ( <div key={index}>Hi</div> )
                })}
                <div className='new-task-button'>
                  <div className='plus-circle' onClick={() => {_newtask()}}>
                    <span className='text-plus-circle'>+</span>
                  </div>
                  <p className='button-text'>New Task</p>
                </div>
              </div> 
            )
          }
          )}
        </div>
        {/* /* {modalOpen && <Modal setOpenModal={setModalOpen} title={btnTitle} />} */}
      </DragDropContext>
     }
    </>
  );
};

export default DragDropComp;