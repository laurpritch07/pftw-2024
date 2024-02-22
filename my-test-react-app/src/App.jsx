import { useState } from 'react'
import './App.css'

function App() {
  const happy = false;
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world! I just made an app in react!</h1>
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
