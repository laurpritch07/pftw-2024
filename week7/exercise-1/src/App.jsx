import './App.css'
import llama from "./assets/llama.jpg";
import alpaca from "./assets/alpaca.jpg";
import Camelid from './Camelid';

function App() {

  return (
    <>
      <h1>Camelids</h1>
      <div className='card'>
        <h2>Llamas</h2>
       <Camelid url={llama} />
       <p>
       Llamas are the camel’s hippie cousins. They belong to a group of animals called camelids that also includes alpacas. All camelids spit or stick out their tongue when they are annoyed.
        </p>
      </div>

      <div className='card'>
        <h2>Alpacas</h2>
       <Camelid url={alpaca} />
       <p>
       Alpacas are the smallest members of the camel family, on average 3 feet high at the shoulder and 4-7 feet long
        </p>
      </div>
    </>
  )
}

export default App

