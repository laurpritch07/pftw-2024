import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import '../App.css'
export function PlantDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedPlant = data.find((plant) => plant.id === id)
    console.log("plant", selectedPlant);

    return (
        <>
        <div className="page">
        <Link to="/">Return to Plant List</Link>
        <h1>{selectedPlant.plantName}</h1>
        <h2>
            {selectedPlant.commonName}
        </h2>
        <div className="detailImage">
            <img src={selectedPlant.image} alt={selectedPlant.plantName} />
        </div>
       <div className="details">
            <p>
                 {selectedPlant.bloom}
            </p>
            <p>
                 {selectedPlant.hardiness}
            </p>
        </div>

        <Link to="/">Return to Plant List</Link>
        </div>
        </>
        
    )
}
PlantDetail.propTypes = { 
    data: PropTypes.array
};
