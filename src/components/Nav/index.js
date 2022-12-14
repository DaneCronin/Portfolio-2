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

      {/* <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
  <div>
    <h3 class="text-2xl font-medium text-blue-500">Dc</h3>
  </div>
  <div class="hidden space-x-8 lg:flex">
    <a name='about' href="#about" onClick= {navSelect}>About</a>
    <a name='projects' href="#projects" onClick={navSelect}>Projects</a>
    <a name='contact' onClick={navSelect} href="#contact">Contact</a>
    <a name='resume' onClick={navSelect} href="#resume">Resume</a>
  </div>
  <div class="flex lg:hidden">
    <div class="space-y-2">
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
    </div>
  </div>
</nav> */}
























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

          <li className='mx-2 bg-zinc-900 duration-300 hover:scale-105'>
            <a name='resume' onClick={navSelect} href="#resume" > 
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default NavBar;