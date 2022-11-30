import React from 'react';
import CroninDane from '../../assets/images/CroninDane.jpg';

const About = () => {
    return (
        <section id='about'>
        <div name="about" className="my-2">
         <div>
            <div>
            <h1> About</h1>
            </div>
            <div>
            <img src={CroninDane} className="my-2" style={{ width: "25%" }} alt="profile photo" />
               
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