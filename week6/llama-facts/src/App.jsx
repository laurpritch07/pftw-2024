
import './App.css'

function App() {
  const llamaFacts = [
    "Llamas have oval shaped blood cells.",
    "Llamas are super clique-y! They have a pecking order for every llama in the pack. ",
    "Llamas only spit at each other as a warning",
    "The gestation period of a llama is 11.5 months ",
  ]
  const lastFact = true;

  return (
    <>
      <div>
        <h1>Llama facts that everyone should know!</h1>
        <ul>
          {llamaFacts.map((llamaFacts) => (
            <li key={llamaFacts}>{llamaFacts}</li>
          ))}
          {lastFact ? (<li>Llamas talk with their ears</li>) : (<li>Llamas have really short tongues.</li>) }
        </ul>
      </div>
    </>
  )
}

export default App
