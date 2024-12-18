import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)

//let counter = 10

const addValue = () => {
//console.log("value added",counter);
//counter = counter + 1
setCounter(counter + 2)
}

const removeValue = () => {
  if(counter > 0){
    setCounter(counter - 1)
  }else{
    console.log("Counter is already at 0, Can't decrease further.")
  }
}


  return (
    <>
     <h1>Custom App</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br/>
     <button
     onClick={removeValue}>Remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
