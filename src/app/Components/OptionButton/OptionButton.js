import React from 'react';

const OptionButton = ({ answer, selectedAnswer, onClick }) => {
  return (
    <div className="text-center">
      <button
        className={`choice_buttons ${selectedAnswer === answer ? 'selected' : ''}`}
        onClick={() => onClick(answer)}
        disabled={selectedAnswer !== null}
        style={{
          color: selectedAnswer === answer ? 'white' : 'black',
          backgroundColor: selectedAnswer === answer ? 'black' : 'transparent',
          width: '70%',
          padding: '5px',
          margin: '20px',
          border: '1px solid black',
          borderRadius: '8px'
        }}
      >
        {decodeURIComponent(answer)}
      </button>
    </div>
  );
};

export default OptionButton;