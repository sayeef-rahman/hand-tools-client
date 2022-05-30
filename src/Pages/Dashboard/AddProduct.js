import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    //navigate
    const navigate = useNavigate();

    //Form Control & Submit
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = formInfo => {
        const name = formInfo.porduct_name;
        const img = formInfo.image_link;
        const description = formInfo.product_description;
        const min_order = formInfo.minimum_order;
        const available = formInfo.available_product_quantity;
        const price = formInfo.product_price;

        const product = {
            name: name,
            img: img,
            description: description,
            min_order: min_order,
            available: available,
            price: price
        }
        fetch('https://murmuring-brushlands-40392.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Product Added`)
                }
                else {
                    toast.error(`Already have and with same Name!`)
                }
                navigate(`/products`);
            });

    }
    return (
        <div>
            <h1>Add Product</h1>
            <div className='flex  justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Product Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("porduct_name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.porduct_name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.porduct_name.message}</span>}
                                </label>
                            </div>

                            {/* Input Product Description */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("product_description", {
                                        required: {
                                            value: true,
                                            message: 'Product Description is Required'
                                        },
                                        pattern: {
                                            value: true,
                                            message: 'Provide Product Description'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.product_description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product_description.message}</span>}
                                    {errors.product_description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.product_description.message}</span>}
                                </label>
                            </div>

                            {/* Input Product Price */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("product_price", {
                                        required: {
                                            value: true,
                                            message: 'Product Price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.product_price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product_price.message}</span>}
                                </label>
                            </div>
                            {/* Input Minimum Order */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("minimum_order", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Order Quantity Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.minimum_order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum_order.message}</span>}
                                </label>
                            </div>

                            {/* Input Available Product Quantity*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Product Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Available Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("available_product_quantity", {
                                        required: {
                                            value: true,
                                            message: `Available Product Quantity Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.available_product_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_product_quantity.message}</span>}
                                </label>
                            </div>
                            {/* Input Image Link*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Image Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image_link", {
                                        required: {
                                            value: true,
                                            message: `Image Link Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image_link?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image_link.message}</span>}
                                </label>
                            </div>

                            {/* Sbmit Button */}
                            <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;