import React from 'react';

//import icons for tech skills
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGithubBadge,
    DiCss3,
    DiHtml5,
  } from "react-icons/di";
  import {SiTailwindcss, SiGraphql} from 'react-icons/si';
 
  function TechSkill () {

    return (
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-y-4 mt-8 auto-rows-max text-sky-500 ">
        
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiJavascript1 size={92} />
          </div>
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiNodejs size= {92}/>
          </div>
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiReact size= {92} />
          </div>
          <div className= 'align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiMongodb size= {92}/>
          </div>
         
          <div className='align-center  p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiGithubBadge size= {92}/>
          </div>
        
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiCss3 size= {92}/>
          </div>

          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <DiHtml5 size= {92}/>
          </div>
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <SiGraphql size= {92}/>
          </div>
          <div className='align-center p-4 mx-auto md:shadow-md duration-300 hover:scale-105 hover:shadow-sky-400'>
            <SiTailwindcss size= {92}/>
          </div>
        </div>
      );
  };

  export default TechSkill;