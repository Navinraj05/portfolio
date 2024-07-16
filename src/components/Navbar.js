import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion } from 'framer-motion';


export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return (
        
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  md:flex-row bg-gradient-to-b from-gray-800 to-black px-5">
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    
    <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
      <div className=" text-xl font-bold">Navin raj N</div>
    </motion.div>

    <div className="hidden md:block">
  
      <div class="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
         <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
             <a href="#home" className="hover:underline">Home</a>
              </motion.div>
  
              <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
              <a href="#about" className="hover:underline">About</a>
              </motion.div>
  
              <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
              <a href="#skills" className="hover:underline">Skills</a>
              </motion.div>
  
              <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
              <a href="#projects" className="hover:underline">Projects</a>
              </motion.div>
  
             <motion.div whileHover={{ scale: 1.1 }}   className="bg-violet-300 text-black p-2 rounded shadow-lg" >
              <a href="#contact" className="hover:underline">Contact</a>
              </motion.div>
     
          </div>
          </div>
          
       </nav>
       
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
)}