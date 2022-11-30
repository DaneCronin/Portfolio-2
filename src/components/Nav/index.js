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
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Dane Cronin
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a  href="#about" onClick={() => setContactSelected(false)}>
              About 
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a href="#contact"> <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
            </a>
          </li>
          {categories.map((category) => (
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
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;