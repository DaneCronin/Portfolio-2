import React, { useState } from 'react';
import './App.css';

//Import components 
import NavBar from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume'


function App() {
  const [contactSelected, setContactSelected] = useState('about');


  // Sets selected nav element to active 
  const selectedHandler = (e) => {
    if (e.target.className !== 'active') {
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for (const el of children) {
          if (el.className === 'active') el.className = 'not';
        }
      }
      e.target.className = 'active';
      setContactSelected(e.target.name);
    }
  };

   // Detects if the about button in the header was pressed
  // If so, sets about in nav to selected
  const aboutBtnHandler = (e) => {
    if(e.target.className === 'button-wrapper') {
      setContactSelected('about');
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for(const el of children) {
          if(el.className === 'active') el.className = 'not';
        }
      }
      document.querySelector('a[name="about"]').className = 'active';
    }
  }


  return (
    <main>

      <Home aboutBtnHandler = {aboutBtnHandler} />

      <NavBar
        navSelect={selectedHandler}
      />
        {contactSelected === 'about'
          ? <About />
          : contactSelected === 'projects'
            ? <Projects />
            : contactSelected === 'contact'
              ? <ContactForm />
              : contactSelected === 'resume'
              ? <Resume/>
              :
              <Home />}
        <Footer/>
   

    
    </main>
  );
}

export default App;
