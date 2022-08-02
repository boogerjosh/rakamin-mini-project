import React from 'react';
import './index.css';

const Label = (props) => {
  const { title } = props;
  return (
    <>
      {title == "Group Task 2" && <div className='label-container' style={{borderColor: "#FEEABC", background: "#FFFCF5"}}>
         <div>
         <p style={{color: "#FA9810"}}>{title}</p>
        </div>
     </div> }
     {title == "Group Task 3" && <div className='label-container' style={{borderColor: "#F5B1B7", background: "#FFFAFA"}}>
         <div>
         <p style={{color: "#E11428"}}>{title}</p>
        </div>
     </div> }
     {title == "Group Task 4" && <div className='label-container' style={{borderColor: "#B8DBCA", background: "#F8FBF9"}}>
         <div>
         <p style={{color: "#43936C"}}>{title}</p>
        </div>
     </div> }
     {title == "Group Task 1" && <div className='label-container'>
         <div>
         <p>{title}</p>
        </div>
     </div> }
    </>
    // <div className='label-container'>
    //     <div>
    //       <p>{title}</p>
    //     </div>
    // </div>
  );
};

export default Label;

Label.defaultProps = {
  title: '',
};