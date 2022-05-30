import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const SingleInfo = ({tool}) => {
    const {name, img,} = tool; 

    return (
        <div className="card card-side bg-base-100 shadow-xl my-4">
            <figure><img className='w-52' src={img} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title my-auto">{name}</h2>
            </div>
        </div>
    );
};

export default SingleInfo;