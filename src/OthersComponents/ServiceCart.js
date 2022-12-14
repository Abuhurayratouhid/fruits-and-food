import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCart = ({ service }) => {
    const { name,price, picture, details, _id } = service;
    
    

    return (
        <PhotoProvider>
            <div className="card w-96  bg-base-100 shadow-xl">
            <figure>
                <PhotoView src={picture}>
                <img className='h-72' src={picture} alt="Fruits and food" />

                </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                <p>{details.length >= 100 ? details.slice(0,100) + '......' : details }</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                    <button className="bg-gradient-to-r from-yellow-300  to-red-500 px-5">details <BsArrowRight></BsArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default ServiceCart;