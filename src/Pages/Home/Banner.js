import React from 'react';
import bg from '../../assets/images/banner.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-opacity-30" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-teal-50">Hand Tools</h1>
                    <p className="mb-5 text-teal-50 text-justify">Hand tools have been used by humans since the Stone Age when stones were used for hammering & cutting. In the Bronze Age tools were made by casting the copper & tin alloys. Bronze tools were sharper & harder than those made of stone.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;