import React from 'react';

//Import images to use in About section
import CroninDane from '../../assets/images/CroninDane.jpg';

const About = () => {
    return (
        <section id='about'>
        <div name="about" className= "max-w-screen-lg p-4 mb-8 mx-auto flex flex-col justify-center" style = {{height:"100vh"}}>
         <div>
         <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">
           About
          </p>
        </div>
            <div>
            <img src={CroninDane} className="my-2" style={{ width: "25%" }} alt="profile avatar of Dane Cronin" />
               
            </div>
            <div>
            <p> 
            Dane Cronin is a professional photographer based in Boulder, Colorado specializing in cycling photography, architectural,
          and interior design photography. He is currently enrolled in a full-stack web development program through the
          University of North Carolina, Charlotte working to add to his skillset.
            </p>
            </div>

            


            </div>
        </div>
        </section>
        
    );
};

export default About; 