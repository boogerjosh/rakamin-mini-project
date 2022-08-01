import React, { useEffect, useState } from 'react';
import './index.css';
import Label from '../../components/elements/label/Label';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Items from '../Items/Items';

const DragDropComp = ({ lists }) => {
  console.log(lists);
  const [arrayLists, setArrayLists] = useState(null);
  const [btnTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setArrayLists(lists);
    setLoading(false);
  }, [lists]);

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
            return (
              <div key={index} className='card-container'>
                <Label
                  title={list.title}
                />
                <h3 className='month-schedule-text'>{list.description}</h3>
                { list ? (list.items.map((item, idx) => {
                  return <div key={idx}>Hi</div>
                })) : (<div>Nothing</div>) } 
                {/* <Items id={list.id}/> */}
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