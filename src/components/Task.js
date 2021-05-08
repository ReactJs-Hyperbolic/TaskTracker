import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className='individual-task'>
      <h3 className='task-title'>{task.title}</h3>
      <p>
        {task.text} <FaTimes className='x-icons' />
      </p>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
