import React from 'react';

const Result = ({ correctAnswers, totalQuestions, calculateScore, handleRestart }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-4 text-center">
        <br /><br /><br /><br /><br />
        <h1 className="font-bold text-2xl"><b>Result</b></h1>
        <p><b>Your Score:</b> {correctAnswers}/{totalQuestions}</p>
        <p><b>Your Percentage:</b> ({calculateScore()}%)</p>
        <h2 className="font-bold text-xl">
          {calculateScore() < 50 ? 'Sorry, You are Fail' : 'Congrats, You Passed'}
        </h2>
        <div className="mt-4">
        <button
  onClick={handleRestart}
  className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
>
  Restart Quiz
</button>


        </div>
      </div>
    </div>
  );
};

export default Result;