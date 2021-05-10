import React from 'react';
import AddTask from './AddTask';

const Header = ({ onAdd, tasks, showAddTask }) => {
  return (
    <div>
      <h1 className='title'>Task Tracker</h1>
      {showAddTask && <AddTask onAdd={onAdd} tasks={tasks} />}
    </div>
  );
};

export default Header;
