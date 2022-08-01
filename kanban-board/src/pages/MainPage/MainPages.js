import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useGetLists } from './action';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import DragDropComp from './DragDropComp';
import { fetchTodos } from './action';
import Label from '../../components/elements/label/Label';
import Modal from '../../components/modal/Modal';
import axios from 'axios';
import BoardData from "../../data/board-data.json";
import Progress from '../../components/progress/Progress';

const MainPages = () => {
  const [ready, setReady] = useState(false);
  const {
    mainPage: { boardDatas } 
  } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const [boardData, setBoardData] = useState(BoardData);
  const [btnTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // dispatch(fetchTodos());
    setReady(true);
  }, []);

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const _newtask = () => {
    setModalOpen(true);
    setModalTitle('Create Task')
  };

  return (
    <div className='main-page'>
      {/* Board columns */}
      { ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          {modalOpen && <Modal setOpenModal={setModalOpen} title={btnTitle} />}
          <div className='cointainer-tasks'>
            {BoardData?.map((board, bIndex) => {
              return (
                <div key={bIndex} className='card-grid'>
                  <Droppable droppableId={bIndex.toString()}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <div key={bIndex} className={`card-container ${snapshot.isDraggingOver}`}>
                          <Label
                            title={board.title}
                          />
                          <h3 className='month-schedule-text'>{board.description}</h3>
                          <div className='item-container'>
                            {board.items.length > 0 ?
                              board.items.map((item, iIndex) => {
                                return (
                                  <Progress
                                    index={iIndex}
                                    key={item.id}
                                    item={item} 
                                  />
                                );
                            }) : <div className='card-item-empty'>
                            <p className='card-empty-text'>No Task</p>
                          </div> }
                          {provided.placeholder}
                          </div>
                          <div className='new-task-button'>
                            <div className='plus-circle' onClick={() => {_newtask()}}>
                              <span className='text-plus-circle'>+</span>
                            </div>
                            <p className='button-text'>New Task</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Droppable>
                </div>
              )
            })}
          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default MainPages;