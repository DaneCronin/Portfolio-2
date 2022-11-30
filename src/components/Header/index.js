import React from 'react';
import HeroImage from '../../assets/images/IndianPeaksSunset.jpg'

const Header = () => {
    //Return JSX to display Header/Hero section
    return(
        <section>

       <img src={HeroImage} alt='Mountain Sunset' style={{ width: "100%" }}/>  
        </section>
    )
};




export default Header;
