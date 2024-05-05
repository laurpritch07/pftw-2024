import {Routes, Route} from "react-router-dom";
import { Home } from "./views/Home";
import { Plant } from "./views/Plant";
import './App.css';
import plantData from "./assets/plan-data.json";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { motion as m } from 'framer-motion';
import { Component } from "react";


function App() {


  return (
    <>
              <div className="px-10 ">
                <nav className="py-10 flex justify-between z-20 ">
                  <h1 className='text-7xl'><a href="/">Meadow Design</a></h1>
                    <ul className="flex items-center">
                        <li>
                          <BsFillMoonStarsFill className="cursor-pointer text-3xl"/>
                        </li>
                    </ul>
                </nav>
                
              </div>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Plant data={plantData}/>} />
     </Routes>

    </>
  )
}

export default App
