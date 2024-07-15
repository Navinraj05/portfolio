import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hello! Iam Navinraj N., a dedicated and enthusiastic ReactJS developer with a strong background in both development and application support. I specialize in creating dynamic and responsive web applications using ReactJS and have a deep understanding of modern front-end development practices.',
        line2: 'My journey in the tech industry began as an Application Support Engineer, where I developed a problem-solving mindset and gained comprehensive knowledge of how applications function at both the user and system levels. This experience has equipped me with the skills to troubleshoot, maintain, and optimize applications to ensure seamless user experiences.',
        line3: 'ReactJS: Proficient in building reusable components, state management, and integrating APIs',
        line4: 'HTML / CSS: Skilled in crafting responsive and accessible web pages',
        line5: 'JavaScript: Strong command of modern JavaScript, including ES6+ features',
        line6: 'TailwindCSS & Bootstrap: Experienced in using utility-first CSS frame works for fast and efficient styling',
        line7: 'Application Support: Hands-on experience in troubleshooting, issue resolution, and performance optimization',
    }

    return <section className='flex flex-col md:flex-row bg-gradient-to-b from-gray-800 to-black px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 text-white mb-5 w-[120px] animate-pulse hover:animate-bounce transition duration-500 font-bold'>About</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                {/* <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
                <p className='pb-5'>{config.line6}</p>
                <p className='pb-5'>{config.line7}</p> */}
            </div>
        </div>
    </section>
}

