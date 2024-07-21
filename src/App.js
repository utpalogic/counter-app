import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(0);

  const plusNum = () => {
    setNum(num + 1);
  };

  const minusNum = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h2 className='heading'>Welcome to counter app</h2>
          <div className='num-display'>{num}</div>
          <div className='button_section'>
            <button onClick={plusNum} className='but'>+</button>
            <button onClick={minusNum} className='but'>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
