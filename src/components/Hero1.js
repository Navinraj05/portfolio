import HeroImg from '../assets/hero.png';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Hero() {
    const config  = {
        subtitle: 'Im a MERN-stack developer',
        social: {
            Email: 'Navinraj5712@gmail.com',
            Github: 'https://github.com/Navinraj05',
            linkedin: 'https://www.linkedin.com/in/navin-raj-n-280348226/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-gradient-to-b from-gray-800 to-black justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span>Navinraj</span> N 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10 text-white '>
                <a href={config.social.Email} className='pr-5 hover:text-white'><MdEmail size={40} /></a>
                <a href={config.social.Github} className='pr-5 hover:text-white'><FaGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><FaLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}