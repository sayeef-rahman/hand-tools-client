import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const navigate = useNavigate()
    // console.log(user)

    // submit form handler

    const onSubmit = (reviewData) => {
        const { name, review } = reviewData;

        // console.log(reviewData)

        const reviewDetails = {
            customerName: name,
            customerEmail: email,
            customerReview: review
        }
        console.log('review detail &&: ', reviewDetails)

        fetch('https://murmuring-brushlands-40392.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Review Added`)
                    // console.log('data',data)
                }
                else {
                    toast.error(`Already have and with same Email!`)
                }
                navigate(`/`);
            });
    }
    return (
        <div>
            <div className="text-4xl py-10 text-primary">Add review</div>
            <div className="justify-center">
                {/* input form */}
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

                    {/* Input review */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea placeholder="Share your review" className=" h-42 border-4 " {...register("review", {})} />
                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        </label>
                    </div>
                    

                    <div className=' justify-start'>
                        <input className='  btn w-full max-w-xs text-white' type="submit" value="Submit Order" />

                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddReview;