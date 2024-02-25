import { useState } from 'react'
import './App.css'

function App() {
  const llamaFacts = [
    "llama poo produces little to no odor",
    "llama fact 2",
    "llama fact 3",
    "llama fact 4",
    "llama fact 5",
  ]

  return (
    <>
      <div>
        <h1>Llama facts!!</h1>
        {happy && (<div>I am Happy</div>)}
        {happy ? (<div>I am happy</div>) : (<div> I am SO happy</div>)}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          COUNT {count}
        </button>
      </div>
      <p className="read-the-docs">
        This was interesting!
      </p>
    </>
  )
}

export default App
