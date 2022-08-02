import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './index.css';

function ProgressPercentage({ progress_percentage }) {
  return (
    <div className='progress'>
        { progress_percentage == 100 ? <div className='bar-percentage'>
            <div style={{width: progress_percentage + '%', backgroundColor: "#43936C", borderRadius: '7px'}} className='percentage' data-percent='70%'></div>
        </div> : <div className='bar-percentage'>
            <div style={{width: progress_percentage + '%'}} className='percentage' data-percent='70%'></div>
        </div>}
        { progress_percentage == 100 ? <CheckCircleIcon className='completed'/> : <div className='number-percent'>{progress_percentage + '%'}</div> }
    </div>
  )
}

export default ProgressPercentage