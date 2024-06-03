import React from 'react';

function MyButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyButton;