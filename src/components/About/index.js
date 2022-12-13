import React from 'react';
import TechSkill from './Techskills';

//Import images to use in About section
import CroninDane from '../../assets/images/CroninDane.jpg';

const About = () => {
    return (
        <section id='about' name="about" className="max-w-screen-lg p-4 mb-8 mt-10 mx-auto flex flex-col justify-content-center" style={{ height: "100vh" }}>
           
                <div>
                    <div className="pb-8">
                        <h1 className="text-4xl font-bold inline border-b-4">
                            About
                        </h1>
                    </div>
                    <div className='p-4 flex align-center overflow-auto'>
                        <img src={CroninDane} className="my-2 float-left" style={{ width: "30%" }} alt="profile avatar of Dane Cronin" />

                    </div>
                    <div className='p-4'>
                        <p>
                            Dane Cronin is a professional photographer based in Boulder, Colorado specializing in cycling photography, architectural,
                            and interior design photography. He is currently enrolled in a full-stack web development program through the
                            University of North Carolina, Charlotte working to add to his skillset.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 flex float-left">

                    <h1 className="text-4xl font-bold inline ">
                        Professional <strong className="text-sky-500 border-b-4">Skillset </strong>
                    </h1>

                    <TechSkill />

                </div>
          
        </section>

    );
};

export default About; 