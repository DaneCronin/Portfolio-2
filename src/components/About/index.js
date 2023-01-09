import React from 'react';
import TechSkill from './Techskills';

//Import images to use in About section
import CroninDane from '../../assets/images/CroninDane.jpg';

const About = () => {
    return (
        <section id='about' name='about' className="p-4 mb-8 mt-15 mx-auto justify-center w-3/4">
           
                <div>
                    <div className="p-4 mb-2 text-center">
                        <h1 className="text-4xl font-bold inline border-b-4">
                            About
                        </h1>
                    </div>
                    <div className='p-2 flex flex-col md:flex-row overflow-auto w-full mb-3'>
                        <img src={CroninDane} className="my-2 w-3/4 mx-auto md:float-left md:w-1/3"  alt="profile avatar of Dane Cronin" />

                    
                        <p className="text-left md:ml-3 md:w-2/3">
                            Dane Cronin is a professional photographer based in Boulder, Colorado specializing in cycling photography, architectural,
                            and interior design photography. He is currently enrolled in a full-stack web development program through the
                            University of North Carolina, Charlotte working to add to his skillset.
                        </p>

                    </div>
                </div>
                <div className="gap-8 p-4 justify-center mx-auto">

                    <h1 className="text-4xl font-bold text-center">
                        Professional <strong className="text-sky-500 border-b-4">Skillset </strong>
                    </h1>

                    <TechSkill />

                </div>
          
        </section>

    );
};

export default About; 