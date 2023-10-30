import React from 'react';

const Button = ({ children, onClickEv }) => {
  return (
    <button onClick={onClickEv} className='button'>
      {children}
    </button>
  );
};

export default Button;
