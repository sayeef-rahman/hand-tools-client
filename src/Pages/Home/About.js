import React from 'react';

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-10 mx-auto mb-14">
            <div className="card-body mx-auto">
                <h2 className="card-title">ABOUT US</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
        </div>
    );
};

export default About;