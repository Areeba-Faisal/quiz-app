import React from 'react';

const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#ccc' : '#d3d3d3',
        color: '#fff',
        padding: '10px 20px',
        border: "1px solid black",
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
