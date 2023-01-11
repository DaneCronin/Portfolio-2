import React from "react";


function NavBar (props) {

// initiate isNavOpen state with false
  // const [isNavOpen, setIsNavOpen] = useState(false); 

  //deconstruct props
  const {navSelect} = props;



  return (
  
    <header className="sticky top-0 z-30 shadow-md">
    
        <a href="/" className="px-2">
          Dane Cronin
        </a>

    
        
<nav className='float-right m-5'>
<ul className="nav-links inline-flex ">
  <li className="mx-2 duration-300 hover:scale-105">
    <a  name='about' href="#about" onClick= {navSelect}>
      About 
    </a>
  </li>

  <li className='mx-2 duration-300 hover:scale-105'>
    <a name='projects' href="#projects" onClick={navSelect}>
      Projects
    </a>
  </li>

  <li className='mx-2 duration-300 hover:scale-105'>
    <a name='contact' onClick={navSelect} href="#contact" > 
      Contact
    </a>
  </li>

  <li className='mx-2 duration-300 hover:scale-105'>
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







//  {/* Nav Hamburger Menu */}
//  <nav className="nav-links float-right m-5">
//  <section className="MOBILE-MENU flex md:hidden">
//    <div
//      className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//    >
     
//      <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
//      <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
//      <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
//    </div>
 
//    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
//              <div
//                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//              >
//        <svg
//          className="h-8 w-8 text-gray"
//          viewBox="0 0 24 24"
//          fill="none"
//          stroke="currentColor"
//          strokeWidth="2"
//          strokeLinecap="round"
//          strokeLinejoin="round"
//        >
//          <line x1="18" y1="6" x2="6" y2="18" />
//          <line x1="6" y1="6" x2="18" y2="18" />
//        </svg>
//      </div>
 
//      <ul className="NAVIGATION-MOBILE-OPEN nav-links flex flex-col items-center justify-between min-h-[250px]">
//        <li className="my-6 ">
//          <a name='about' href="#about" onClick={navSelect}>About</a>
//        </li>
//        <li className="my-6 ">
//          <a name='projects' href="#projects" onClick={navSelect}>Projects</a>
//        </li>
//        <li className="my-6 ">
//          <a name='resume' href="#resume" onClick={navSelect}>Resume</a>
//        </li>
//        <li className="my-6 ">
//          <a name='contact' href="#contact" onClick={navSelect}>Contact</a>
//        </li>
//      </ul>
//    </div>
//  </section>
 
//  <ul className="DESKTOP-MENU hidden nav-links space-x-3 md:flex">
//    <li>
//      <a name='about' href="#about" onClick={navSelect}>About</a>
//    </li>
//    <li>
//      <a name='projects' href="#projects" onClick={navSelect}>Projects</a>
//    </li>
//    <li>
//      <a name='resume' href="#resume" onClick={navSelect}>Resume</a>
//    </li>
//    <li>
//      <a name='contact' href="#contact" onClick={navSelect}>Contact</a>
//    </li>
//  </ul>
//  </nav>