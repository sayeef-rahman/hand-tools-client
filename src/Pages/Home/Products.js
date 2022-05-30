import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://murmuring-brushlands-40392.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div className='mx-auto my-28'>
            <h1 className='text-3xl text-center my-10'>Products We Manufacture : {products.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;