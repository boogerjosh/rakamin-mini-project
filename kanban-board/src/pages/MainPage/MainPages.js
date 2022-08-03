import React, { useEffect, useState } from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { useGetLists } from './action';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Label from '../../components/elements/label/Label';
import Modal from '../../components/modal/Modal';
import Progress from '../../components/progress/Progress';
import { useMoveItem } from '../../components/dialogMenu/action';

const MainPages = () => {
  const { getListTodos } = useGetLists();
  const { moveItem } = useMoveItem();
  const [ready, setReady] = useState(false);
  const {
    mainPage: { boardDatas } 
  } = useSelector((state) => state);
  const [boardData, setBoardData] = useState(boardDatas);
  const [btnTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [todo_id, setTodoId] = useState(null);
  const [idx, setIndex] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [progressVal, setProgressVal] = useState('');

  useEffect(() => {
    getListTodos();
    setReady(true);
  }, []);

  const onDragEnd = async (re) => {
    console.log(re);
    if (!re.destination) return;
    let newBoardData = boardDatas;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    console.log(dragItem);
    let start = 0, end = boardDatas.length;
    let targettodoId = null;
    while (start < end) {
      if (boardDatas[start].id == dragItem.todo_id) {
        targettodoId = boardDatas[parseInt(re.destination.droppableId)].id;
        break;
      }
      start++;
    }
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    await moveItem({name: dragItem.name, targettodoId, id: dragItem.id, todo_id: dragItem.todo_id});
    getListTodos();
  };

  const _newtask = (id) => {
    setId(id);
    setModalOpen(true);
    setModalTitle('Create Task');
  };

  return (
    <div className='main-page'>
      { ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          {modalOpen && <Modal setOpenModal={setModalOpen} id={id} title={btnTitle} name={taskName} progressVal={progressVal} todo_id={todo_id} />}
          <div className='cointainer-tasks'>
            {boardDatas?.map((board, bIndex) => {
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
                                    id={item.id}
                                    todo_id={item.todo_id}
                                    idx={idx}
                                    setIndex={setIndex}
                                    setModalOpen={setModalOpen}
                                    setProgressVal={setProgressVal}
                                    setTaskName={setTaskName}
                                    setId={setId}
                                    setModalTitle={setModalTitle}
                                    setTodoId={setTodoId}
                                  />
                                );
                            }) : <div className='card-item-empty'>
                            <p className='card-empty-text'>No Task</p>
                          </div> }
                          {provided.placeholder}
                          </div>
                          <div className='new-task-button'>
                            <div className='plus-circle' onClick={() => {_newtask(board.id)}}>
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