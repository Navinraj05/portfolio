import { motion } from 'framer-motion';
import SimpleToDoList from '../assets/SimpleTodolist.png';
import websiteImg2 from '../assets/pricesheet.png';
import websiteImg3 from '../assets/Capstone.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: SimpleToDoList,
                description: 'simple ToDoList',
                linkFrontend: 'https://github.com/Navinraj05/day-25.git',
                linkBackend:  'https://superlative-longma-4fa981.netlify.app/'
            },
            {
                image: websiteImg2,
                description: ' subscription price sheet ',
                linkFrontend: 'https://github.com/Navinraj05/day-26-.git',
                linkBackend: 'https://remarkable-truffle-c929a0.netlify.app/'
            },
            {
                image: websiteImg3,
                description: 'Daily-Dress-colour-suggestions-women',
                linkFrontend:'https://github.com/Navinraj05/Daily-Dress-colour-suggestions-women.git',
                linkBackend: 'https://github.com/Navinraj05/Daily-Dress-colour-suggestions-women--backend.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 text-white mb-5 w-[150px] animate-pulse hover:animate-bounce transition duration-500 font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                     <motion.div whileHover={{ scale: 1.1 }} className="text-white p-5 rounded shadow-lg" >
                             <img alt="Project 3" className="rounded mb-4 h-[250px] w-[450px]" src={project.image}/>
                             {/* <div className='project-desc'></div> */}
                             <p className='text-center px-5 py-5'>{project.description}</p>
                             <div className='flex justify-center py-5 space-x-4' >
                             <a className='text-center btn ' target='_blank' href={project.linkFrontend}>Frontend</a>
                             <a className='btn text-center' target='_blank' href={project.linkBackend}>Backend</a>
                             </div>
                             {/* <p className="text-red-700 mt-2">Description of project 3.</p> */}
                    </motion.div>
                        {/* <img className='h-[250px] w-[450px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center py-5 space-x-4' >
                                <a className='btn' target='_blank' href={project.linkFrontend}>Frontend</a>
                                <a className='btn' target='_blank' href={project.linkBackend}>Backend</a>
                            </div>
                        </div> */}
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}