import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(1);

  const plusNum = () => {
    setNum(num + 1);
  };

  const minusNum = () => {
    setNum(num - 1);
  };

  const increfive=()=>{
    setNum(num+5);
  };

  const decrefive=()=>{
    setNum(num-5);
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h2 className='heading'>Welcome to counter app</h2>
          <div className='num-display'>{num}</div>
          <div className='button_section'>
            <button onClick={plusNum} className='but'>+</button>
            <button onClick={minusNum} className='but' disabled={num<=1}>-</button>
            <button onClick={increfive} className='but'>+5</button>
            <button onClick={decrefive} className='but' disabled={num<=1}>-5</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
