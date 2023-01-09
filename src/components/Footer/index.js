// Imports
import React from 'react';

//Import Icons for Contact links
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Component initialization
function Footer () {

  // Array for contact info to be linked with icons
  const icons = [
    {
        id: 1,
        child: (
            <>
              Mail <HiOutlineMail size={42} />
            </>
          ),
      name: 'email',
      href: 'mailto:danecronin@gmail.com'
    },
    {
        id: 2, 
      name: 'github',
      child: (
        <>
          GitHub <FaGithub size={42} />
        </>
      ),
      href: 'https://github.com/DaneCronin'
    },
    {
        id: 3,
        child: (
            <>
              Linkedin <FaLinkedin size={42} />
            </>
          ),
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/dane-cronin-b9721032/'
    }
  ];

  // JSX
  return (
    <footer className='footer flex flex-col p-2'>
      


      <div className="hidden lg:flex top-[70%] fixed">
      <ul>
        {icons.map(({ id, child, href, style}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-3 py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-700 bg-transparent" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <p className="sm:text-sm p-3">Designed and Developed by Dane Cronin &copy; {new Date().getFullYear()}</p>
    
    </footer>
  );
};


// Export component
export default Footer;