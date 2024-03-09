import { useState } from 'react'
import './App.css'
import llama from "./assets/llama.jpg";
import alpaca from "./assets/alpaca.jpg";
import Animal from './animal';
import { func } from 'prop-types';

function App() {
  const [pet, setPet] = useState(llama);
  function handleClick(evt) {
    evt.preventDefault();
    const target = evt.target.id;
      if(target === "llamaLink") {
        setPet(llama)
      }
      if(target === "alpacaLink") {
        setPet(alpaca)
      }
  }
  function alertMessage(message) {
    alert(message);
  }

  return (
    <>
      <h1>Camelids</h1>
      <div>
       <Animal url={pet} messageFn={alertMessage} />
      </div>
      <div className="card">
        <a href="#" onClick={handleClick} id='llamaLink'>
          llama
        </a>
        <a href="#" onClick={handleClick} id='alpacaLink'>
          alpaca
        </a>
      </div>
    </>
  )
}

export default App
