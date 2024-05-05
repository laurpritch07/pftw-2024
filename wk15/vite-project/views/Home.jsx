import {Link} from "react-router-dom";
import plantData from "../src/assets/plan-data.json"
import ItemCard from "../src/ItemCard/ItemCard";
import { Plant } from "./Plant";


export function Home () {
    return (
        <>
        <h1 className='text-8xl'>Meadow Design </h1>
        {plants.map((plantingGuide) => {
            return (
                <div key={plant.slug}>
                <img src={plant.image} alt={plant.plantName} />
                <p><Link to={`${plant.slug}`}><strong>{plant.plantName}</strong> by {plant.bloom}</Link></p>
                </div>
    )

    })}

        </>
    )
}