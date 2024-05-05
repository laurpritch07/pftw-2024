import {BsFillMoonStarsFill} from 'react-icons/bs';
import mastheadImg from "../assets/masthead.jpg";
import "./Masthead.css";
import { useState } from 'react';


export default function Masthead() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <main className='md:px-20 lg:px-40"'>
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
            <h1>Meadow Design </h1>
        
                <ul className='flex items-center'>

                    <li>
                        <a 
                        className=''
                        href='#'>Perennials</a>
                    </li>

                    <li>
                        <a 
                        className=' ml-8'
                        href='#'>Shrubs</a>
                    </li>

                    <li>
                        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl ml-8'/>
                    </li>
                </ul>
            </nav>

       
        <div className="masthead">
            
            <h2>Spring 2024 Planting Guide</h2>
            <img src={mastheadImg} alt="Spring 2024 Planting Guide" className="rounded-lg" />
        </div>
        </section>
        </main>

    )
}