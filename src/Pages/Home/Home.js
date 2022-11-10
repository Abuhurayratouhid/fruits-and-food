import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Achievement from '../../OthersComponents/Achievement';
import Carousel from '../../OthersComponents/Carousel';
import ServiceCart from '../../OthersComponents/ServiceCart';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner/Banner';
import ExtraSection from './ExtraSection';
import ReviewInHome from './ReviewInHome';
import Services from './Services/Services';


const Home = () => {
    const allReviews = useLoaderData()
    console.log(allReviews)
    const [services, setServices]= useState([])
    const [servicesLoading, setServicesLoading] = useState(true)
    useTitle('Home')
    

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setServicesLoading(false)
        })
    },[])

    if(servicesLoading){

        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600 ml-[50%] "></div>
    }
    
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
           <div>
            <h1 className='text-center mt-10 text-5xl font-bold'> Why people like us:</h1>
           </div>
           <div className='grid gap-3 mt-10 grid-cols-1 lg:grid-cols-3'>
           {
            allReviews.map(reviews => <ReviewInHome
            key={reviews._id}
            reviews={reviews}
            ></ReviewInHome>)
           }
           </div>
           <ExtraSection></ExtraSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;