import React from 'react';
import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <div className='tasks-box'>
      {tasks.map(task => (
        <Task key={task.id} task={task} className='task' />
      ))}
    </div>
  );
};

export default Tasks;
