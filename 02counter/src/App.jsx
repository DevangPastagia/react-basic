import { useState } from "react"
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const add = () => {
    counter++;
    setCounter(counter)
  }

  const remove = () => {
    if (counter <= 0) return
    counter--;
    setCounter(counter)
  }

  return (
    <>
      <h1>Code with react</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={add} > Add Value </button>
      <br />
      <button onClick={remove} > Remove Value </button>
    </>
  )
}

export default App
