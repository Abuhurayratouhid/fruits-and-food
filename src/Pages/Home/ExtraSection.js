import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center bg-white rounded-l-full lg:h-[300px] py-20">
                    <h1 className="text-5xl font-bold">Let's keep in touch</h1>
                    <p className="py-6">We respect your privacy. Sign up here and create your account. we will never send you a single message without your benefits</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 md:h-[350px] shadow-2xl bg-gradient-to-r from-green-400 to-blue-300 hover:from-pink-200 hover:to-yellow-300 ">
                        
                     {/* login form     */}
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone or Email </span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Where are you from ?</span>
                            </label>
                            <input type="text" name='password' placeholder="Address" className="input input-bordered" required/>
                            {/* <label className="label">
                                <Link to='/signUp'>
                                <p className="label-text-alt link link-hover">Are you new here? <span className='text-2xl text-blue-900'>Sign up</span></p>
                                </Link>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-green-400 to-blue-300 hover:from-pink-200 hover:to-yellow-300 ">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;