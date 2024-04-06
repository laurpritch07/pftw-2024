import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import plantData from "../assets/plan-data.json"
export function Home() {
    const [plants, setPlants] = useState(plantData);
      
      console.log(plants);
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
      
      function addCard(newCard) {
        const cardWithId = {
          ...newCard,
          id: nanoid()
        }
        setPlants([...plants, cardWithId])
      }
      return(
        
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
    <hr />


  </div>
    );
}