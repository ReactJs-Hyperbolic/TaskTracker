import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className='tasks-box'>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          className='task'
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
