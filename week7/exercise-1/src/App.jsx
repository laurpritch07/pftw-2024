import './App.css'
import Camelid from './Camelid'

function App() {
  const camelidArray = [
    {label: "Lamma", des: "llama fact" , image: "week7/exercise-1/src/images/360_F_565740155_jISgBIQ6KxAnJrU9BelT0monORTNarHm.jpg"},
    {label: "Lamma", des: "llama fact" , image: "./images/alpaca.jpg"},
  ]


  return (
    <>
      <div> 
        <Camelid camelidArray={camelidArray} />
      </div>
    </>
  )
}

export default App
