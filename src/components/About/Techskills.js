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
    DiPhotoshop,
    DiMysql
  } from "react-icons/di";
  import {SiTailwindcss} from 'react-icons/si';
 
  function TechSkill () {

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 flex text-sky-500">
        
          <div className='duration-300 hover:scale-105'>
            <DiJavascript1 size= {64} />
          </div>
          <div className='duration-300 hover:scale-105'>
            <DiNodejs size= {64}/>
          </div>
          <div className='duration-300 hover:scale-105'>
            <DiReact size= {64} />
          </div>
          <div className='duration-300 hover:scale-105'>
            <DiMongodb size= {64}/>
          </div>
         
          <div className='duration-300 hover:scale-105'>
            <DiGithubBadge size= {64}/>
          </div>
        
          <div className='duration-300 hover:scale-105'>
            <DiCss3 size= {64}/>
          </div>

          <div className='duration-300 hover:scale-105'>
            <DiHtml5 size= {64}/>
          </div>
          <div className='duration-300 hover:scale-105'>
            <DiPhotoshop size= {64}/>
          </div>
          <div className='duration-300 hover:scale-105'>
            <DiMysql size= {64}/>
          </div>
          <div className='duration-300 hover:scale-105'>
            <SiTailwindcss size= {64}/>
          </div>
        </div>
      );
  };

  export default TechSkill;