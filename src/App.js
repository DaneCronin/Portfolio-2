import React, { useState } from 'react';
import './App.css';

//Import components 
import NavBar from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from "./components/Footer";


function App() {
  const [contactSelected, setContactSelected] = useState();


    // Sets selected nav element to active 
  const selectedHandler = (e) => {
    if(e.target.className !== 'active') {
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for(const el of children) {
          if(el.className === 'active') el.className = 'not';
        }
      }
      e.target.className = 'active';
      setContactSelected(e.target.name);
    }
  }


  return (

    <div>
      <NavBar
       navSelect={selectedHandler}
        />
  <main>
  {contactSelected === 'about' 
      ? <About/> 
      : contactSelected === 'projects' 
      ? <Projects/> 
      : contactSelected === 'contact'
      ? <ContactForm/>
      : 
      <Home/> }
</main>
<Footer/>
  </div>
  );
}

export default App;
