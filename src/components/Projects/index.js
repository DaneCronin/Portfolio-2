import React from 'react';

//Importing images to use for projects cards
import PicMe from '../../assets/images/picme-screenshot.png';
import DaneCroninPhoto from '../../assets/images/DaneCroninPhoto.png';
import RunBuddy from '../../assets/images/run-buddy.png';
import BookSearch from '../../assets/images/BookSearch.png';
import JATE from '../../assets/images/JATE.png';
import portfolioOne from '../../assets/images/portfolio.png';

//Importing icons
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Portfolio = () => {
  const projectPortfolio = [
    {
      id: 1,
      image: PicMe,
      languages: 'JS, MYSQL, HANDLEBARS, BOOTSTRAP',
      appName: "PicMe",
      repoLink: "https://github.com/CalebFunderburk/PicMe",
      deploy: "https://picme1.herokuapp.com",
    },
    {
      id: 2,
      image: DaneCroninPhoto,
      languages: 'PHOTO PORTFOLIO',
      appName: "Dane Cronin Photography",
      deploy: "https://www.danecronin.com"
    },
    {
      id: 3,
      image: RunBuddy,
      languages: 'HTML, CSS',
      appName: "RunBuddy",
      repoLink: "https://github.com/DaneCronin/run-buddy",
      deploy: "https://danecronin.github.io/run-buddy"
    },
    {
      id: 4,
      image: BookSearch,
      languages: 'JS, WEBPACK, ',
      appName: "Book-Search",
      repoLink: "https://github.com/DaneCronin/Book-Search",
      deploy: "https://stormy-ridge-01724.herokuapp.com/",
    },
    {
      id: 5,
      image: JATE,
      languages: 'JS, WEBPACK, WORKBOX',
      appName: "Just Another Text Editor",
      repoLink: "https://github.com/DaneCronin/JATE",
      deploy: "https://intense-spire-60256.herokuapp.com/",
    },
    {
      id: 6,
      image: portfolioOne,
      languages: 'HTML, CSS',
      appName: "Portfolio One",
      repoLink: "https://github.com/DaneCronin/portfolio",
      deploy: "https://danecronin.github.io/portfolio/"
    }
  ];


  //JSX to display 
  return (
    <section id="projects">
    <div name="portfolio" className="md:h-screen mx-auto" >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-grey-800">
            Portfolio Projects
          </h1>
          <p className="py-8">
            Some of the current projects I have been working on while learning to become a full-stack developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">
          {projectPortfolio.map(({ id, image, languages, appName, repoLink, deploy }) => (
            <div key={id} className="shadow-md shadow-slate-600 rounded-md duration-300 hover:scale-105 ">
              <div>
                <img
                  src={image}
                  style={{ width: "100%" }}
                  alt={appName}
                  className="rounded-md"
                />
              </div>
              <div className="p-2 text-center">
               <p className='text-xs'>{languages}</p>
                <h2 className='text-zinc-700 text-xl py-2'><strong>{appName}</strong> </h2>
              </div>
              <div className="flex justify-center">
                <a target="_blank" rel="noreferrer"
                  href={repoLink}
                  className="project-button duration-300 hover:scale-105 rounded-md"
                >
                  <BsGithub/> GitHub
                </a>

                <a target="_blank" rel="noreferrer"
                  href={deploy}
                  className="project-button duration-300 hover:scale-105 rounded-md"
                >
                  <CgWebsite/> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;

