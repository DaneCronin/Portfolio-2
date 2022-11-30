import React from 'react';
import PicMe from '../../assets/images/picme-screenshot.png';
import DaneCroninPhoto from '../../assets/images/mtnbike.jpg';
import RunBuddy from '../../assets/images/run-buddy.png';
const Portfolio = () => {
    const projectPortfolio = [
        {
            id: 1,
            src: PicMe,
            appName: "PicMe",
            repoLink: "https://github.com/CalebFunderburk/PicMe",
            deploy: "https://picme1.herokuapp.com",
        },
        {
            id: 2,
            src: DaneCroninPhoto,
            appName: "Dane Cronin Photography",
            deploy: "https://www.danecronin.com"
        },
        {
            id: 3, 
            src: RunBuddy,
            appName: "RunBuddy",
            repoLink: "https://github.com/DaneCronin/run-buddy",
            deploy: "https://danecronin.github.io/run-buddy"
        },
    ];


    //JSX to display 
    return(
        <div
        name="portfolio" id="projects"
        className="md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-grey-800">
              Portfolio Projects
            </h1>
            <p className="py-8">
              Current projects for my 2022 portfolio.
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projectPortfolio.map(({ id, src, appName, repoLink, deploy }) => (
              <div key={id} className="shadow-md shadow-slate-600 rounded-lg">
                <img
                  src={src}
                  style={{ width: "50%" }}
                  alt="demo"
                  className="rounded-md duration-700 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a
                    href={repoLink}
                    className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
                  >
                    {appName}
                  </a>
                  <a
                    href={deploy}
                    className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
                  >
                    Deployment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;

