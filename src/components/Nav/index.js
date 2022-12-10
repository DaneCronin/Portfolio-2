import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function NavBar (props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  return (
    <header className="flex-row">
      <h2 className='ml-2'>
        <a href="/">
          Dane Cronin
        </a>
      </h2>
      <nav>
        <ul className="flex-row bg-zinc-900 ">
          <li className="mx-2 bg-zinc-900 duration-300 hover:scale-105">
            <a  href="#about" onClick={() => setContactSelected(false)}>
              About 
            </a>
          </li>
          <li className={`mx-2 bg-zinc-900 duration-300 hover:scale-105 ${contactSelected && 'navActive'}`}>
            <a href="#contact"> <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
            </a>
          </li>

          <li className={`mx-2 bg-zinc-900 duration-300 hover:scale-105 ${contactSelected && 'navActive'}`}>
            <a href="#projects"> <span onClick={() => setContactSelected(true)}>
              Projects
            </span>
            </a>
          </li>


        
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;