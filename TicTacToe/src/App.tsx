import { useState } from 'react'
import './App.css'
import Blocks from './components/blocks'

function App() {

  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("x");
  // console.log(set);

  const handleClick = (index: number) => {
    console.log(index);
    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;
    setCurrentTurn(currentTurn === "x" ? "o" : "x");
    setState(stateCopy);
  };

  return (
    <div >
      <h1 className='text-slate-200 text-2xl text-center m-8'>Tic Tac Toe</h1>
      <div className='grid place-content-center'>
        <div className='flex'>
          <Blocks onClick = {()=> handleClick(0)} value={state[0]}/>
          <Blocks onClick = {()=> handleClick(1)} value={state[1]}/>
          <Blocks onClick = {()=> handleClick(2)} value={state[2]}/>
        </div>
        <div className='flex'>
          <Blocks onClick = {()=> handleClick(3)} value={state[3]}/>
          <Blocks onClick = {()=> handleClick(4)} value={state[4]}/>
          <Blocks onClick = {()=> handleClick(5)} value={state[5]}/>
        </div>
        <div className='flex'>
          <Blocks onClick = {()=> handleClick(6)} value={state[6]}/>
          <Blocks onClick = {()=> handleClick(7)} value={state[7]}/>
          <Blocks onClick = {()=> handleClick(8)} value={state[8]}/>
        </div>
      </div>
    </div >
  )
}

export default App
