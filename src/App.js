import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const App = () => {
  const btnValues = [
    ["c", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ];
  return (
    <div className = 'calculator-container'>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button key={i} value={btn} />
          ))}
        </ButtonBox>
      </Wrapper>
      </div>
  )
}

export default App;