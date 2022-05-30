import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faPeopleGroup, faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const BusinessSumarry = () => {

    return (
        <div className='mx-auto my-20'>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl'>OUR SERVICES</p>
                <p className='text-3xl my-3'>Hand Tools Provides</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20'>
                <div className="card w-96 bg-amber-50 sm:mt-10 mx-auto rounded-none">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon icon={faGlobeAsia} className="text-6xl text-primary"></FontAwesomeIcon>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">Global Shipment</h2>
                        <h2 className="card-title text-4xl uppercase text-primary"><CountUp start={0} end={165} duration={1.5}/><span>+</span></h2>
                        <p>Successful Shipment Globally</p>
                    </div>
                </div>
                <div className="card w-96 bg-amber-50 sm:mt-10 mx-auto rounded-none">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon icon={faCompassDrafting} className="text-6xl text-primary"></FontAwesomeIcon>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">Custom Design</h2>
                        <h2 className="card-title text-4xl uppercase text-primary"><CountUp start={0} end={45} duration={1.5}/><span>+</span></h2>
                        <p>Buyer Custom Tool Design</p>
                    </div>
                </div>
                <div className="card w-96 bg-amber-50 sm:mt-10 mx-auto rounded-none">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-6xl text-primary"></FontAwesomeIcon>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">User Experience</h2>
                        <h2 className="card-title text-4xl uppercase text-primary"><CountUp start={0} end={94} duration={1.5}/><span>%</span></h2>
                        <p>Overall Customer Experience</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BusinessSumarry;