import React, {useState, useEffect} from 'react';
import './App.css';

//Import components 
import NavBar from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Projects';


function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* ADDING NEW PORTFOLIO CONTENT BELOW */}
<NavBar/>

<Header/>
<br>
</br>

<About/>
<br>
</br>
<Portfolio/>
<br>
</br>
<ContactForm/>


    </div>
  );
}

export default App;
