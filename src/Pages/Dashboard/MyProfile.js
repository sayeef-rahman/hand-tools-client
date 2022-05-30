import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [loggedUser] = useAuthState(auth);
    const userEmail = loggedUser.email;

    //navigate
    const navigate = useNavigate();

    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-brushlands-40392.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, [dbUsers]);

    const SingleUSer = [];

    dbUsers.map(user => {
        if (user.customerEmail === userEmail) {
            SingleUSer.push(user)
        }
        else {
            return;
        }
    });
    // console.log("----", SingleUSer[0]);

    //Form Submit Section
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (formInfo, event) => {
        const customerName = SingleUSer[0].customerName;
        const customerAddress = formInfo.address;
        const customerEmail = formInfo.email;
        const customerMobile = formInfo.mobile;
        const zipCode = formInfo.zip;

        // console.log(customerName,customerEmail,customerMobile,customerAddress,zipCode);

        const updatedUserInfo = {
            customerName: customerName,
            customerEmail: customerEmail,
            customerAddress: customerAddress,
            zipCode: zipCode,
            customerMobile: customerMobile
        }

        // console.log('updated',updatedUserInfo);
        fetch('https://murmuring-brushlands-40392.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUserInfo)
        })
            .then(response => response.json())
            .then(info => {
                if (info.success) {
                    toast(`Already have and with same Email!`)
                }
                else {
                    toast.error(`Profile informaion added at My Profile in Dashboard`)
                }
                alert('Sure to Update Profile?');
                event.target.reset();
                navigate(`/dashboard/myprofile`);
            });
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <h1 className='text-lg font-bold text-center'>My Information</h1>
                <div className="card-body">
                    <label className="input-group">
                        <span>Name</span>
                        <span className='bg-white input text-lg'>{SingleUSer[0]?.customerName}</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <span className='bg-white input text-lg'>{SingleUSer[0]?.customerEmail}</span>
                    </label>
                    <label className="input-group">
                        <span>Mobile</span>
                        <span className='bg-white input text-lg'>{SingleUSer[0]?.customerMobile}</span>
                    </label>
                    <label className="input-group">
                        <span>Address</span>
                        <span className='bg-white input text-justify text-sm'>{SingleUSer[0]?.customerAddress}</span>
                    </label>
                    <label className="input-group">
                        <span>Zip</span>
                        <span className='bg-white input text-lg'>{SingleUSer[0]?.zipCode}</span>
                    </label>

                    <div className="card-actions justify-center">
                        <label htmlFor="my-modal-3" className="btn modal-button text-xl"><FontAwesomeIcon icon={faEdit} className="mx-3"></FontAwesomeIcon>Edit</label>
                    </div>
                </div>
            </div>
            {/* Modal Div */}
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Update Your Profile Information </h3>
                        <small className='text-red-600'>You can not change Name & Email</small>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={SingleUSer[0]?.customerName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: ''
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
                                    value={SingleUSer[0]?.customerEmail}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: ''
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

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Update profile" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyProfile;

