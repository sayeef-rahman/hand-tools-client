import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <div className="card-body" >
                <div className="flex items-center my-3" >
                    <div className="avatar" >
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5" >
                           
                        </div >
                    </div >
                    <div className='text-justify'>
                        <h4 className='text-xl'>{review.customerName}</h4>
                        <p className='text-justify'>{review.customerReview}</p>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Review;