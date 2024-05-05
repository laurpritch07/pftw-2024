import { Link, Route, Routes } from 'react-router-dom';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from 'react'
import mastheadImg from "./assets/masthead.jpg";
import './App.css'
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from 'nanoid';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [plants, setPlants] = useState([
  {
    plantName: "Sanguisorba Minor",
    commonName: "Sanguisorba",
    color: "Smoky-pink",
    height: "30cm up to 2m",
    hardiness: "Hardiness: USDA 4a-8b",
    bloom: "Bloom Time: Late Summer to Autumn",
    image: "./Sanguisorba.webp",
    id: "1"
  },

  {
    plantName: "Symphyotrichum novi-belgii",
    commonName: "Asters",
    color: "Purple",
    height: "1.2m",
    hardiness: "Hardiness: USDA 4a-8b",
    bloom: "Bloom Time: late summer",
    image: "./asters.webp",
    id: "2"
  },

  {
    plantName: "Molinia caerulea arundinacea",
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
    plantName: "Veronicastrum virginicum",
    commonName: "Culver's Root",
    color: "White",
    height: "1.2m",
    hardiness: "Hardiness: USDA 4a-9b",
    bloom: "Bloom Time: Mid Summer",
    image: "./veronica.webp",
    id: "5"
  },

  {
    plantName: "Schizachyrium scoparium",
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
    <>
      <main className='md:px-20 lg:px-40"'>
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <Link href={"/"}>
            <h1 className='text-8xl'>Meadow Design </h1>
          </Link>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl ml-8' />
            </li>
          </ul>
        </nav>


        <h2>Spring 2024 Planting Guide</h2>
        <img src={mastheadImg} alt="Spring 2024 Planting Guide" className="rounded-lg" />
        </section>
      </main>


    <div className={darkMode ? "dark" : ""}>
    <div className='bg-white dark:bg-slate-900'></div>
    <div className='md:px-20 lg:px-20'>
        <h3 className='text-5xl font-medium text-gray-800'>Perennials</h3>
    

      <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
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

    </div>
    </>)
}

export default App
