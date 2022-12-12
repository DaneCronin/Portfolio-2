import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function NavBar (props) {

  //deconstruct props
  const {navSelect} = props;



  return (
  
    <header className="flex-row sticky top-0 z-30">
      <h2 className='ml-2'>
        <a href="/">
          Dane Cronin
        </a>
      </h2>
      <nav className='flex-row'>
        <ul className="nav-links flex-row bg-zinc-900 ">
          <li className="mx-2 bg-zinc-900 duration-300 hover:scale-105">
            <a  name='about' href="#about" onClick= {navSelect}>
              About 
            </a>
          </li>

          <li className='mx-2 bg-zinc-900 duration-300 hover:scale-105'>
            <a name='projects' href="#projects" onClick={navSelect}>
              Projects
            </a>
          </li>

          <li className='mx-2 bg-zinc-900 duration-300 hover:scale-105'>
            <a name='contact' onClick={navSelect} href="#contact" > 
              Contact
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default NavBar;