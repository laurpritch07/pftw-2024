import { useState } from 'react'
import './App.css'
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from 'nanoid';

function App() {
  const [plants, setPlants] = useState([
  {
    plantName: "Sanguisorba Minor ‘Blackthorn'",
    commonName: "Sanguisorba",
    color: "Smoky-pink",
    height: "30cm up to 2m",
    hardiness: "Hardiness: USDA 4a-8b",
    bloom: "Bloom Time: Late Summer to Autumn",
    image: "./Sanguisorba.webp",
    id: "1"
  },

  {
    plantName: "Symphyotrichum novi-belgii ‘Violetta’",
    commonName: "Asters",
    color: "Purple",
    height: "1.2m",
    hardiness: "Hardiness: USDA 4a-8b",
    bloom: "Bloom Time: late summer",
    image: "./asters.webp",
    id: "2"
  },

  {
    plantName: "Molinia caerulea subsp. arundinacea ‘Transparent’",
    commonName: "Tall moor grass",
    color: "Green",
    height: "1.8m",
    hardiness: "Hardiness: USDA 5a-8b",
    bloom: "Bloom Time: Early Summer to Late Fall",
    image: "./tall-moor-grass.webp",
    id: "3"
  },

  {
    plantName: "Thalictrum rochebruneanum",
    commonName: "Meadow Rue",
    color: "Maroon",
    height: "1.5m",
    hardiness: "Hardiness: USDA 4a-10b",
    bloom: "Bloom Time: Late Summer",
    image: "./meadow-rue.webp",
    id: "4"
  },

  {
    plantName: "Veronicastrum virginicum ‘Album’",
    commonName: "Culver's Root",
    color: "White",
    height: "1.2m",
    hardiness: "Hardiness: USDA 4a-9b",
    bloom: "Bloom Time: Mid Summer",
    image: "./veronica.webp",
    id: "5"
  },

  {
    plantName: "Schizachyrium scoparium 'Standing Ovation'",
    commonName: "Little Bluestem",
    color: "White",
    height: "1.8m",
    hardiness: "Hardiness: USDA 3-9",
    bloom: "Bloom Time: Summer",
    image: "./ovation.jpg",
    id: "6"
  },

]);
function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = plants.filter((plantingGuide) => {
    return plantingGuide.id !== id; // will skip item with matching id
  })
  setPlants(updatedArray)
}

function duplicateCard(id) {
  console.log("duplicate me", id);
  const matchingPlant = plants.find((plantingGuide) => {
    return plantingGuide.id === id
  });
  const updatedPlant = {...matchingPlant, id: nanoid()}
  setPlants([...plants, updatedPlant]); 
}



  return (
    <div className="page">
      <Masthead />
      <h3>Plant List</h3>
      <div className="collection">
        {/* plant map goes here */}
        {/* use ItemCard component in Loop */}
        {plants.map((plantingGuide) => {
          return (
            <ItemCard 
            key={plantingGuide.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...plantingGuide} />

          )

        })}
      </div>

    </div>
  )
}

export default App
