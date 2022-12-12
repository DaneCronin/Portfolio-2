import React from 'react';

//import icons for tech skills
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3,
  } from "react-icons/di";

  function TechSkill () {

    return (
        <div style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
          <div xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </div>
          <div xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </div>
          <div xs={4} md={2} className="tech-icons">
            <DiReact />
          </div>
          <div xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </div>
         
          <div xs={4} md={2} className="tech-icons">
            <DiGit />
          </div>
        
          <div xs={4} md={2} className="tech-icons">
            <DiCss3/>
          </div>
        </div>
      );
  };

  export default TechSkill;