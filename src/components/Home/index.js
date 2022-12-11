import React from 'react';
// import HeroImage from '../../assets/images/IndianPeaksSunset.jpg'
import Type from "./Type";

const Home = () => {
    //Return JSX to display Header/Hero section
    return(
        <section className='bg-zinc-900 object-cover'>
           
            
       {/* <img src={HeroImage} alt='Mountain Sunset'/>   */}
       <div>
        <h1 className='text-white text-6xl'>Hi. I am Dane Cronin</h1>
       </div>

       <div style={{ padding: 50, textAlign: "left" }} className='text-6xl'>
                <strong><Type/></strong>
              </div>
              
        </section>
    )
};




export default Home;
