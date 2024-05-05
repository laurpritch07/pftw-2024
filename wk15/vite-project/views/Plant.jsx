import {Link, useParams} from "react-router-dom";
export function Plant ({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedPlant = data.find((plant) => plant.slug === slug)
    console.log(selectedPlant)
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>{selectedPlant.plantName}</h1>
            <img src={selectedPlant.image} alt={selectedPlant.plantName} />
            <p>Bloom Time: {selectedPlant.bloom}</p>
            <p>Hardiness: {selectedPlant.hardiness}</p>
        </>
    )
}

Plant.prototypes = {
    data: PropTypes.arrayOf(PropTypes.any)
}