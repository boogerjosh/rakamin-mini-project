import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Draggable } from "react-beautiful-dnd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './index.css'
import ProgressPercentage from './ProgressPercentage';
import HorizontalDots from './HorizontalDots';

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
                <ProgressPercentage
                  progress_percentage={item.progress_percentage}
                />
                <HorizontalDots />
              </div>
          </div>
        )}
    </Draggable>
  )
}

export default Progress