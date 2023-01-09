import React from 'react';
import Type from "./Type";




const Home = (props) => {


    // Deconstruct props
    const { aboutBtnHandler } = props;



    //Return JSX to display Header/Hero section
    return (
        <section className='bg-zinc-900 object-cover py-8' style={{ height: "100vh" }}>
            <div>
                <div className='flex justify-center text-center '>
                    <h1 className='mt-6 p-6 text-white text-6xl'><span className='text-sky-500'><strong>Hi.</strong></span> I am Dane Cronin</h1>

                </div>

                <div style={{ padding: 50, textAlign: "left" }} className='text-6xl flex justify-center'>
                    <strong><Type /></strong>
                </div>


                <a name='about' href="#about" onClick={aboutBtnHandler}
                    className="text-sky-500 text-3xl px-6 py-3 my-2 flex justify-center duration-300 hover:scale-105 cursor-pointer"
                >
                    Learn More
                </a>


            </div>
        </section>
    )
};




export default Home;
