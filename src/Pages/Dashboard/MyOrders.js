import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const userEmail = user.email;

    //getting orders from server
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-brushlands-40392.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [auth]);

    var myOrders = [];

    orders?.map(order => {
        if (order?.customerEmail == userEmail) {
            myOrders.push(order)
        }
        else {
            return;
        }

    });

    const handelCheckout = () => {
        // console.log('clicked')
        navigate('/checkout');
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Unit price </th>
                        <th>total</th>
                        <th>Checkout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((single, index) =>
                            <tr
                                key={index}>
                                <td>{index + 1}</td>
                                <td>{single.productName}</td>
                                <td>{single.orderedQuantity}</td>
                                <td>{single.productPrice}</td>
                                <td>{single.subTotal}</td>
                                <td><button onClick={handelCheckout} className='btn btn-primary'><small className='uppercase'>Pay</small></button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;