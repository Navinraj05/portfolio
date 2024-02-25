import './App.css';
import AboutMe from './components/AboutMe'
//import About from './components/About';
import Header from './components/Header1';
import Hero from './components/Hero1';
import Experience from './components/Experience';
import Projects from './components/projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinkes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <SocialLinks/>
    </div>
  );
}

export default App;