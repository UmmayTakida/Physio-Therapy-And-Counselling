import React from 'react';
import Bnner from '../Banner/Bnner';
import Services from '../Services/Services';
import AboutUs from './Aboutus/AboutUs';
import Ourteams from './teams/Ourteams';

const Home = () => {
    return (
        <div>

            <Bnner></Bnner>
            <Services></Services>
            <Ourteams></Ourteams>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;