import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoById } from '../MainPage/action';

const Items = (props) => {
  return (
    <>
      {props.items.map((item, idx) => {
        return  <div>Hi</div>
      })}
    </>
  );
};

export default Items;