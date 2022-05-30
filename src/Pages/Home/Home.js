import React from 'react';
import AddReview from '../Dashboard/AddReview';
import About from './About';
import Banner from './Banner';
import BusinessSumarry from './BusinessSumarry';
import ContactUs from './ContactUs';
import InfoCards from './InfoCards';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <BusinessSumarry></BusinessSumarry>
            <Reviews></Reviews>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;