import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Navinraj N. I am a MERN stack web developer. I built Modern Websites with React.js , Tailwind CSS I am proficient in Frontend skills like React.js, Redux, Axios, Tailwind CSS, Css3 and many more.',
        line2: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose',
        line3: 'i Have 3 years of IT Experience 1.6 year ReactJs development role 1.6 years support engineer role and iam completed Mern Stack course In Guvi   '
    }

    return <section className='flex flex-col md:flex-row bg-gradient-to-b from-gray-800 to-black px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 text-white mb-5 w-[120px] font-bold'>About</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}