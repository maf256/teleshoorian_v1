import './App.css';
import { Navbar } from './components/Nav/Navbar.js';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/About';
import Skills from './components/Skills/Skills.js'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'
import { useState } from 'react';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('nr')  
  
        console.log('slm',selectedLanguage);
  
  
  return (
    <div>
      <Navbar selectedLanguage={'en'} setSelectedLanguage={setSelectedLanguage}/>
      <Header selectedLanguage={'en'}/>
      <AboutMe selectedLanguage={'en'} />
      <Skills selectedLanguage={'en'} />
      <Contact />
      <Footer selectedLanguage={'en'}/>
      
    </div>
  );
}

export default App;

