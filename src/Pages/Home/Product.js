import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({ product }) => {
    const { _id, name, img, description, min_order, available, price } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Hand Tools" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                    <p className='font-bold text-lg'>Price: ${price}</p>
                    <p className='font-bold text-yellow-600'>Minimum Order: {min_order} PCS</p>
                    <p className='font-bold text-green-600'>Stock Available: {available} PCS</p>
                <div className="card-actions">
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Product;