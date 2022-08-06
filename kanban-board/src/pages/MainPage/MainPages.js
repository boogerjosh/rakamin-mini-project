import React, { useEffect, useState } from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { useGetLists } from './action';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Label from '../../components/elements/label/Label';
import Modal from '../../components/modal/Modal';
import Progress from '../../components/progress/Progress';
import { useMoveItem } from '../../components/dialogMenu/action';
import Button from '../../components/elements/button/Button';
import LazyLoad from 'react-lazyload';
import AddIcon from '@mui/icons-material/Add';

const MainPages = () => {
  const { getListTodos } = useGetLists();
  const { moveItem } = useMoveItem();
  const [ready, setReady] = useState(false);
  const {
    mainPage: { boardDatas } 
  } = useSelector((state) => state);
  const [btnTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [todo_id, setTodoId] = useState(null);
  const [idx, setIndex] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [progressVal, setProgressVal] = useState('');
  const [formLabel, setLabelForm] = useState({
    label1: 'Task Name',
    label2: 'Progress'
  })
  const [formPlaceHolder, setPlaceHolder] = useState({
    placeHolder1: 'Type ur Task',
    placeHolder2: '70%'
  })

  useEffect(() => {
    getListTodos();
    setReady(true);
  }, []);

  const onDragEnd = async (re) => {
    if (!re.destination) return;
    let newBoardData = boardDatas;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
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

  const addGroup = () => {
    setModalOpen(true);
    setModalTitle('Create a Todo');
    setLabelForm({ ...formLabel, label1: 'Title', label2: 'Description' });
    setPlaceHolder({ ...formPlaceHolder, placeHolder1: 'Type ur Title', placeHolder2: 'Type ur Description' });
  }

  return (
  <div className='main-page'>
    {modalOpen && <Modal setOpenModal={setModalOpen} id={id} title={btnTitle} 
    name={taskName} progressVal={progressVal} todo_id={todo_id} formLabel={formLabel} 
    setLabelForm={setLabelForm} formPlaceHolder={formPlaceHolder} setPlaceHolder={setPlaceHolder} />}
    <div className='header'>
        <p className='text-header'>Product Roadmap</p>
        <Button text='Add New Group' className='btn-add-newgroup' onClick={() => {addGroup()}}/>
    </div>
    <div className='body'>
      { ready ? (
        <DragDropContext onDragEnd={onDragEnd}>
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
                                    bIndex={bIndex}
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
                              <AddIcon className='text-plus-circle'/>
                            </div>
                            <div className='button-text'>
                              <p>New Task</p>
                            </div>
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
      ) : (<LazyLoad height={200} />) }
    </div>
  </div>
  );
};

export default MainPages;