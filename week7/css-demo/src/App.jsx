import "./styles.css";
function App() {
  const isKenOld = "no";


  return (
    <>
    <h1 className={isKenOld === "yes" ? "blue" : "red"}>Css Demo</h1>
    <p style={{
      color: "green",
      fontSize: "36px",
      }}>This is some random test</p>
    </>
  )
}

export default App
