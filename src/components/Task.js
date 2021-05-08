import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`individual-task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className='task-title'>{task.title}</h3>
      <p>
        {task.text}{' '}
        <FaTimes className='x-icons' onClick={() => onDelete(task.id)} />
      </p>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
