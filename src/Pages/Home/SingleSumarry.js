import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

const SingleSumarry = ({ sumarry }) => {
    const { name, description } = sumarry;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <FontAwesomeIcon icon={faGlobeAsia} className="text-6xl"></FontAwesomeIcon>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleSumarry;