import React from 'react';

const ContactUs = () => {
    return (
        <div className="hero bg-blend-lighten lg:w-3/4 mx-auto mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:pl-20">
                    <h1 className="text-5xl font-bold">Contact US</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="number" placeholder="Mobile" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Queries</span>
                            </label>
                            <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;