import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Draggable } from "react-beautiful-dnd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './index.css'

function Progress({ item, index }) {
  
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
                <div className='progress'>
                  { item.progress_percentage == 100 ? <div className='bar-percentage'>
                      <div style={{width: item.progress_percentage + '%', backgroundColor: "#43936C", borderRadius: '7px'}} className='percentage' data-percent='70%'></div>
                  </div> : <div className='bar-percentage'>
                      <div style={{width: item.progress_percentage + '%'}} className='percentage' data-percent='70%'></div>
                  </div>}
                  { item.progress_percentage == 100 ? <CheckCircleIcon className='completed'/> : <div className='number-percent'>{item.progress_percentage + '%'}</div> }
                </div>
                <div className="horizontal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
          </div>
        )}
    </Draggable>
  )
}

export default Progress