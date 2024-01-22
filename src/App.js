import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalProvider from './context/CalContext';

const App = () => {
  const btnValues = [
    ["c", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ];
  return (
    <CalProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button key={i} value={btn} />
          ))}
        </ButtonBox>
      </Wrapper>
      </CalProvider>
  )
}

export default App;