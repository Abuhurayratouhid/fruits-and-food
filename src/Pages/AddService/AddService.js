import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    return (
        <div className=''>
            <h1 className='text-center my-10 text-4xl font-bold'>Add a service</h1>
            <div className="card flex-shrink-0 lg:w-3/4 lg:ml-40 md:h-[600px] shadow-2xl bg-gradient-to-r from-slate-300  to-slate-400">
                    {/* signUp form  */}

                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service name: </span>
                            </label>
                            <input type="text" name='name' placeholder="Service name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service price</span>
                            </label>
                            <input type="text" name='email' placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service details :</span>
                            </label>
                            <input type="text" name='password' placeholder="details" className="input input-bordered" required/>
                            
                            
                        </div>
                        <div className="form-control ">
                            <button className="mt-20 btn bg-gradient-to-r from-yellow-300  to-red-500 ">Add service</button>
                        </div>
                        
                    </form>
                </div>
        </div>
    );
};

export default AddService;