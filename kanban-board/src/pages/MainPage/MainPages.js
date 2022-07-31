import React, { useEffect, useState } from 'react';
import Label from '../../components/elements/label/Label';
import './index.css';
import { useSelector } from 'react-redux';
import { useGetLists } from './action';
import Modal from '../../components/modal/Modal';

const MainPages = () => {
  const { getListTodos } = useGetLists();
  const {
    mainPage: { lists } 
  } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await getListTodos();
    };
    loadData();
  }, [lists]);

  return (
    <div className='main-page'>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className='cointainer-tasks'>
        { lists && lists.length ? lists.map(idx => {
          return (
            <div key={idx.id} className='card-container'>
              <Label
                title={idx.title}
              />
              <h3 className='month-schedule-text'>{idx.description}</h3>
              <div className='task-column'>
                <p className='task-text'>No Task</p>
              </div>
              <div className='new-task-button'>
                <div className='plus-circle' onClick={() => setModalOpen(true)}>
                  <span className='text-plus-circle'>+</span>
                </div>
                <p className='button-text'>New Task</p>
              </div>
            </div>
          )
        }) : false }
      </div>
    </div>
  );
};

export default MainPages;