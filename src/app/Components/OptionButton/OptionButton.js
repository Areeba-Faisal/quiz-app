import React from 'react';

const OptionButton = ({
  answer,
  selectedAnswer,
  onClick,
  customStyle,
  disabledCondition,
}) => {
  const handleClick = () => {
    onClick(answer);
  };

  return (
    <div className="text-center">
      <button
        className={`choice_buttons ${selectedAnswer === answer ? 'selected' : ''}`}
        onClick={handleClick}
        disabled={disabledCondition}
        style={{
          backgroundColor: selectedAnswer === answer ? 'black' : 'transparent',
          color: selectedAnswer === answer ? 'white' : 'black',
          width: '70%',
          padding: '5px',
          margin: '20px',
          border: '1px solid black',
          borderRadius: '8px',
          cursor: disabledCondition ? 'not-allowed' : 'pointer',
          ...customStyle,
        }}
      >
        {decodeURIComponent(answer)}
      </button>
    </div>
  );
};

export default OptionButton;
