import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceCart from './AllServiceCart';


const AllServices = () => {
    const allServices = useLoaderData()
    // console.log(allServices)
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center my-5 font-bold'>All Services </h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    allServices.map(service => <AllServiceCart
                        key={service._id}
                        service={service}
                    ></AllServiceCart>)
                }
            </div>
        </div>
    );
};

export default AllServices;