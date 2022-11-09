import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Achievement from '../../OthersComponents/Achievement';
import Carousel from '../../OthersComponents/Carousel';
import ServiceCart from '../../OthersComponents/ServiceCart';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {
    const [services, setServices]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                    services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
                }
            </div>
            <div>
            <h1 className='text-center mt-5 mb-5'><Link to='/allServices'><button className="btn border-none bg-gradient-to-r from-yellow-500  to-red-500">See all services </button></Link> </h1>

            </div>
            <Achievement></Achievement>
           <Carousel></Carousel>
           <Footer></Footer>
        </div>
    );
};

export default Home;