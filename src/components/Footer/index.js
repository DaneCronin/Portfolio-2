// Imports
import React from 'react';

//Import Icons for Contact links
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {FiPhone} from 'react-icons/fi';

// Component initialization
function Footer () {

  // Array for contact info to be linked with icons
  const icons = [
    {
        id: 1,
        child: (
            <>
              Mail <HiOutlineMail size={32} />
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
          GitHub <FaGithub size={32} />
        </>
      ),
      href: 'https://github.com/DaneCronin'
    },
    {
        id: 3, 
        child: (
            <>
            Phone <FiPhone size={32}/>
            </>
        ),
 
      name: 'phone',
      href: 'tel: 978.609.6117'
    },
    {
        id: 4,
        child: (
            <>
              Linkedin <FaLinkedin size={32} />
            </>
          ),
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/dane-cronin-b9721032/'
    }
  ];

  // JSX
  return (
    <footer className='footer sticky-bottom'>
      


      <div className="hidden lg:flex flex-col top-[70%] fixed">
      <ul>
        {icons.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-700 bg-zinc-900" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <p>Designed and Developed by Dane Cronin ©2022</p>
    </footer>
  );
};


// Export component
export default Footer;