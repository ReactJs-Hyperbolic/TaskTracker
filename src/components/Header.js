import React from 'react';
import AddTask from './AddTask';

const Header = () => {
  return (
    <div>
      <h1 className='title'>Task Tracker</h1>
      <AddTask />
    </div>
  );
};

export default Header;
