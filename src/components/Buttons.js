import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({ btn1, btn2 }) => {
  return (
    <div className='button-box'>
      <Button className='custombtn' variant='contained' color='primary'>
        {btn1}
      </Button>
      <Button className='custombtn' variant='contained' color='secondary'>
        {btn2}
      </Button>
    </div>
  );
};

Buttons.defaultProps = {
  btn1: 'test',
};

export default Buttons;
