import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-justify'>
            <h1>Name: Sayeef Rahman</h1>
            <h1>Email: sayeef.cse@gmail.com</h1>
            <h1>Educational Background: B.Sc. Engg. in CSE - BUBT 2020</h1>
            <h1>Technologies: React, JavaScript, Node, MongoDB, ExpressJS, DOM, HTML, CSS, BOOTSTRAP CSS, Tailwind CSS, Heroku, Firebase, Daisy UI</h1>
            <h1>Projects</h1>
            <ul>
                <li className='ml-6'><a href="https://hand-tools-50644.web.app/">Hand Tools</a></li>
                <li className='ml-6'><a href="https://toffpark-footwear-user.web.app/">Toffpark Wearhouse</a></li>
                <li className='ml-6'><a href="https://pics-diary.web.app/">Pics Diary</a></li>
            </ul>
        </div>
    );
};

export default MyPortfolio;