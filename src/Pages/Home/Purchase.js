import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { productID } = useParams();
    //User Informatin
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

    //navigate
    const navigate = useNavigate();


    //Product Fetch
    const [product, setProduct] = useState([]);
    const { img, description, min_order, available } = product;
    const productName = product.name;
    const productPrice = product.price;
    // console.log(typeof(available));

    useEffect(() => {
        fetch(`https://murmuring-brushlands-40392.herokuapp.com/products/${productID}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productID]);

    //Form Submit
    const { register, formState: { errors }, handleSubmit } = useForm();
    const  onSubmit =  formInfo => {
        const customerAddress = formInfo.address;
        const customerEmail = formInfo.email;
        const customerMobile = formInfo.mobile;
        const zipCode = formInfo.zip;
        const orderedQuantity = parseInt(formInfo.quantity);
        const subTotal = parseInt(productPrice) * orderedQuantity;
        const num = Math.random();
        const orderId = num.toString().split('.')[1];

        const orderDetails = {
            _id: orderId,
            productName: productName,
            productID: productID,
            productImg: img,
            customerName: displayName,
            customerEmail: customerEmail,
            customerAddress: customerAddress,
            zipCode: zipCode,
            customerMobile: customerMobile,
            orderedQuantity: orderedQuantity,
            productPrice: productPrice,
            subTotal: subTotal
        }
        fetch('https://murmuring-brushlands-40392.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Profile informaion added at My Profile in Dashboard`)
                }
                else {
                    toast.error(`Already have and with same Email!`)
                }
                navigate(`/dashboard`);
            });

        const userDetails = {
            customerName: displayName,
            customerEmail: customerEmail,
            customerAddress: customerAddress,
            customerMobile: customerMobile,
            zipCode: zipCode
        }
        fetch('https://murmuring-brushlands-40392.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(user => {
                if (user.success) {
                    toast(`User Information added at My Profile`)
                }
                else {
                    toast.error(`Already have same Order with same quantity!`)
                }
                navigate(`/purchase/${productID}`);
            });
    }

    return (
        <div className='my-20 grid lg:grid-cols-2 gap-0'>
            <div className="card w-96 bg-base-100 mx-auto shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Hand Tools" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p className='text-justify'>{description}</p>
                    <p className='font-bold text-lg'>Price: ${productPrice}</p>
                    <p className='font-bold text-yellow-600'>Minimum Order: {min_order} PCS</p>
                    <p className='font-bold text-green-600'>Stock Available: {available} PCS</p>
                </div>
            </div>
            <div className='flex  justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">User Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            {/* Input Email */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Input Mobile */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your mobile Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("mobile", {
                                        required: {
                                            value: true,
                                            message: 'Mobile is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                                </label>
                            </div>
                            {/* Input Address */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Shipping Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>

                            {/* Input Quantity */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Purchase Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Purchase Quantity"
                                    min={min_order}
                                    max={available}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: `Quantity must be between ${min_order} to ${available}`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            {/* Input Zip */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Postal/ Zip Code</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Postal/ Zip Code"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("zip", {
                                        required: {
                                            value: true,
                                            message: `Postal/ Zip Code is Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.zip?.type === 'required' && <span className="label-text-alt text-red-500">{errors.zip.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;