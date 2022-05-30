import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));

    }, []);
    return (
        <section className='my-28 container mx-auto' >
            <h2 className='text-xl uppercase text-center text-primary font-bold my-3'> What our customer say,</h2 >
            <div className="text-4xl text-primary text-center">CUSTOMER REVIEWS</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;