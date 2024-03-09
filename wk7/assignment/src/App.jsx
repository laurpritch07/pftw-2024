import "./App.css";
import { PlantRow } from "./PlantRow";

function App() {
  const plantingGuide = [
  {
    plantName: "Sanguisorba ‘Blackthorn'",
    commonName: "sanguisorba",
    color: "Smoky-pink",
    height: "30cm up to 2m",
    hardiness: "USDA 4a-8b",
    bloom: "late summer to autumn",
    image: "./Sanguisorba.webp",
  },

  {
    plantName: "Symphyotrichum novi-belgii ‘Violetta’",
    commonName: "Asters",
    color: "Purple",
    height: "1.2m",
    hardiness: "USDA 4a-8b",
    bloom: "late summer",
    image: "./asters.webp",
  },

  {
    plantName: "Molinia caerulea subsp. arundinacea ‘Transparent’",
    commonName: "Tall moor grass",
    color: "Green/Bronze",
    height: "1.8m",
    hardiness: "USDA 5a-8b",
    bloom: "Early Summer to Late Fall",
    image: "./tall-moor-grass.webp",
  },

  {
    plantName: "Thalictrum rochebruneanum",
    commonName: "Meadow Rue",
    color: "Maroon",
    height: "1.5m",
    hardiness: "USDA 4a-10b",
    bloom: "Late Summer",
    image: "./meadow-rue.webp",
  },

  {
    plantName: "Veronicastrum virginicum ‘Album’",
    commonName: "Culver's Root",
    color: "White",
    height: "1.2m",
    hardiness: "USDA 4a-9b",
    bloom: "Mid Summer",
    image: "./veronica.webp",
  },

];
  return (
    <>
    <div className="page">
    <h1>Meadow Garden</h1>
    <h2>Summer 2024 Planting Guide</h2> 
    <table className="plant-table">
      <thead>
        <tr>
          <th>Plant Name</th>
          <th>Common Name</th>
          <th>Color</th>
          <th>Height</th>
          <th>Hardiness</th>
          <th>Bloom</th>
          <th>Image</th>
        </tr>  
      </thead>
      <tbody>
      {plantingGuide.map((plantName, index) => {
        return (

        <PlantRow 
        key={plantName.image}
        odd={index % 2 === 0}
        plantName={plantName.plantName}
        commonName={plantName.commonName}
        color={plantName.color}
        height={plantName.height}
        hardiness={plantName.hardiness}
        bloom={plantName.bloom}
        image={plantName.image}
        />
      )
    })}
      </tbody>
    </table>   
    </div>
    </>
  )
}

export default App;