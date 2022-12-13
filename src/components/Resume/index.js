import React from 'react';
import TechSkill from '../About/Techskills';



const Resume = () => {
    return (
        <section id='resume' name="resume" className="max-w-screen-lg p-4 mb-8 mt-10 mx-auto flex flex-col justify-content-center" style={{ height: "100vh" }}>
           
                <div>
                    <div className="pb-8">
                        <h1 className="text-4xl font-bold inline border-b-4">
                            Resume
                        </h1>
                    </div>
                   
                    <div className='p-4'>
                        <p>
                            Resume coming SOON!
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

export default Resume; 