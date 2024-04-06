import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./views/Home";
import { PlantDetail } from "./views/PlantDetail";
import plantData from "./assets/plan-data.json";


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<PlantDetail data={plantData} />} />
      </Routes>
  )
}

export default App
