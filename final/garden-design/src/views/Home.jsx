import { Link } from "react-router-dom";
import plantData from "../assets/plan-data.json";
import { motion as m } from 'framer-motion';
import { AnimatePresence } from "framer-motion";

export function Home() {
    return (
        <m.div 
        initial={{opacity: 0}} 
        animate={{ opacity:1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="text-gray-900  w-full h-full white lg:px-48 "
        >
            <section>
          
                {plantData.map((plant) => {
                    return (
                        
                        <div>
                        <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 mx-2" key={plant.slug}  >
                            <div className="shadow-xl p-10 rounded-xl text-center my-10 max-w-l mx-auto">
                            <div>
                                <img className="mx-auto rounded-full object-cover w-96 h-96 mt-8 mb-8 overflow-hidden" src={plant.image} alt={plant.plantName} width={100} height={100}/>
                            </div>
                            <h2 className="text-3xl py-2  text-gray-800"><Link to={`${plant.slug}`}><strong>{plant.plantName}</strong></Link></h2>
                            <h3 className="text-2xl pb-2 text-center text-gray-800">Common Name: {plant.commonName}</h3>
                            <p className=""> Hardiness: {plant.hardiness} </p>
                            <p className=""> Bloom: {plant.bloom}</p>
                            </div>
                        </div>
                        </div>
                        </div>
                       
                        )
                    })}
            </section>
            </m.div>
            
      
    )
}