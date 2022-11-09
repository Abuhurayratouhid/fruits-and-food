import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { name,picture, details ,_id,price, rating } = service;
    return (
        <div>
            <h1 className='text-center my-10 text-4xl'>All details for : {name} </h1>
            {/* service details section  */}
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">Price:{price}</h2>
                        <h2 className="card-title">Rating:{rating}</h2>
                        <p>{details}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Listen</button> */}
                        </div>
                    </div>
                </div>

            </div>

            {/* service review section  */}
            <div>

            </div>
        </div>
    );
};

export default ServiceDetails;