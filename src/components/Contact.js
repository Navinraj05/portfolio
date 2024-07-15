import { FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
export default function Contact () {

    const config = {
        email : 'Navinraj5712@gmail.com',
        phone: '9176757045',
        Github:'https://github.com/Navinraj05',
        Linkedin:'https://www.linkedin.com/in/navin-raj-n-280348226/'
    
    }

    return <section id='contact' className='flex flex-col bg-gradient-to-b from-gray-800 to-black px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  text-white mb-5 w-[140px] animate-pulse hover:animate-bounce transition duration-500 font-bold'>Contact</h1>
            <p className='pb-5 font-bold'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2 font-bold'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2 font-bold '><span className='font-bold'>Phone :</span> {config.phone}</p>
             <a href={config.Github}className='py-2'><span className='font-bold'>Github </span></a>
            <a href={config.Linkedin}className='py-2'><span className='font-bold'>Linkedin  </span> </a>
        </div>
    </section>
}