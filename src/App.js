import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinkes';
import Footer from './components/Footer';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
 
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <SocialLinks/>
    </div>
  );
}

export default App;