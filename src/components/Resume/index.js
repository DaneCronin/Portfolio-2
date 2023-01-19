import React from 'react';
import TechSkill from '../About/Techskills';



const Resume = () => {
    return (
        <section id='resume' name='resume' className="p-4 mb-8  mx-auto justify-center w-3/4">
           
                <div>
                    <div className="pb-8 text-center">
                        <h1 className="text-4xl font-bold inline border-b-4">
                            Resume
                        </h1>
                    </div>
                   
                    <div className='p-4 flex text-center'>
                        
                        <a className="text-100 w-1/4 text-center bg-zinc-900  px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-700" href={require('../../assets/Docs/DaneCroninResume.pdf')} download>Download Resume</a>
                    </div>
                </div>
                <div className="gap-8 p-4 justify-center mx-auto text-center my-3">


                    <h1 className="text-4xl font-bold inline mb-5">
                        Professional <strong className="text-sky-500 border-b-4">Skillset </strong>
                    </h1>


                    <TechSkill />

                </div> 
        </section>
    );
};

export default Resume; 