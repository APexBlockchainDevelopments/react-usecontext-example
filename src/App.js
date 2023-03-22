import React, { useState, useContext, createContext, newContext } from 'react';

const MyContext = createContext('initial')

function App() {
  const [value, setValue] = useState('Hello world');

  const changeValue = (newValue) => {
    setValue(newValue);
  }

  return (
    <MyContext.Provider value={{ value, changeValue }}>
      <Example1 />
      <Example2 />
    </MyContext.Provider>
  );
}

function Example1() {
  const { value, changeValue } = useContext(MyContext);

  return (
    <>
      <p>The current avlue is "{value}"</p>
      <button onClick={() => changeValue('Example 1 Value')}>Example 1: Click me</button>
    </>
  )
}

function Example2() {
  const { value, changeValue } = useContext(MyContext);

  return (
    <>
      <p>The current avlue is "{value}"</p>
      <button onClick={() => changeValue('Example 2 Value')}>Example 2: Click me</button>
    </>
  )
}
export default App;
