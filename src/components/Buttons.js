import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({ btn1, toggleAddTask, showAddTask }) => {
  return (
    <div className='button-box'>
      <Button
        className='custombtn'
        variant='contained'
        color={showAddTask ? 'secondary' : 'primary'}
        onClick={toggleAddTask}
      >
        {btn1}
      </Button>
    </div>
  );
};

Buttons.defaultProps = {
  btn1: 'test',
};

export default Buttons;
