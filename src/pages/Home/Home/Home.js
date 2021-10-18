import React from 'react';
import Bnner from '../Banner/Bnner';
import Services from '../Services/Services';
import AboutUs from './Aboutus/AboutUs';

const Home = () => {
    return (
        <div>
            <h2>this is Home page</h2>

            <Bnner></Bnner>
            <Services></Services>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;