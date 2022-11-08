import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const {name} = service;
    return (
        <div>
            <h1>details page for : {name} </h1>
        </div>
    );
};

export default ServiceDetails;