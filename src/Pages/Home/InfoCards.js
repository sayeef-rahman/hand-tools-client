import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleInfo from './SingleInfo';

const InfoCards = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://murmuring-brushlands-40392.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const handleAllProducts = () =>{
        navigate('/products');
    }

    return (
        <div className='grid'>
            <h1 className='text-center lg:text-5xl text-4xl my-14'>OUR PRODUCTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 lg:mx-10'>
                {
                    tools.map(tool => <SingleInfo
                        key={tool._id}
                        tool={tool}
                    >
                    </SingleInfo>)
                }
            </div>
            <div className='mx-auto mt-8'>
                <button onClick={()=>handleAllProducts()} className="btn btn-pirmary uppercase  text-white font-bold bg-gradient-to-r from-primary to-secondary border-none text-base" >ALL PRODUCTS</button>
            </div>
        </div>
    );
};

export default InfoCards;