import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProduct = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-brushlands-40392.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handelCheckout = () => {
        // console.log('clicked')
        navigate('/checkout');
    }

    // Delete Single Shoe
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://murmuring-brushlands-40392.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Min. Order Quantity</th>
                        <th>Unit price </th>
                        <th>Available Quantity</th>
                        <th>Checkout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) =>
                            <tr
                                key={product._id}
                                >
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.min_order}</td>
                                <td>{product.price}</td>
                                <td>{product.available}</td>
                                <td><button onClick={() => handleDelete(product._id)}className='btn btn-primary'><small className='uppercase'>Delete</small></button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;