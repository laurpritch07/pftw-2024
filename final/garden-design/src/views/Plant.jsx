import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types";
import { motion as m } from 'framer-motion';

export function Plant ({data}) {
    const {slug} = useParams();
    const selectedPlant = data.find((plant) => plant.slug === slug)
    console.log(selectedPlant)
    
    return (
        <>
         
            <m.div 
                        initial={{opacity: 0}} 
                        animate={{ opacity:1 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="text-gray-900 w-full h-full bg-white lg:px-48 "
                        >
            <div className="text-center p-10 py-10">
                <h1 className='text-4xl py-10 font-semibold'>{selectedPlant.plantName}</h1>
                <img src={selectedPlant.image} alt={selectedPlant.plantName} />
                <h2 className="text-2xl py-2 font-semibold">Common Name: {selectedPlant.commonName}</h2>
                <p className="text-md py-2 text-gray-800">Bloom: {selectedPlant.bloom}</p>
                <p className="text-md py-2 text-gray-800">Hardiness: {selectedPlant.hardiness}</p>
            </div>
            </m.div>
        </>
    )
}

Plant.proptypes = {
    data: PropTypes.arrayOf(PropTypes.any)
}
