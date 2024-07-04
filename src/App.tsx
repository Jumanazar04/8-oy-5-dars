import { useState } from 'react';
import './App.css';
import Increment from './components/Increment';
import Count from './components/Count';
import Decrement from './components/Decrement';
function App() {

  // function prop
  const [count, setCount] = useState();

  const decrement = ()=>{
    return setCount + 1
  }
  return (
    <>
      <Increment increment={setCount} />
      <Count count={count} />
      <Decrement decrement={decrement} />
    </>
  )
}

export default App
