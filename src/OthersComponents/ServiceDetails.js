import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contaxt/AuthProvider';
import OthersReviewCart from './OthersReviewCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
    const [someReview, setSomeReview] = useState([])
    console.log(someReview)
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { name, picture, details, _id, price, rating } = service;

    
 useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setSomeReview(data))
 },[])
    
    

    const handleTextArea = () => {
        if (!user) {
            alert(`please login to add your review`)
           
            
        }
    }

    // handleReview
    const handleReview =(event)=>{
        event.preventDefault();
        const reviewForm = event.target;
        const review = reviewForm.review.value;
        console.log(review)

        const fullReview ={
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            email: user?.email,
            serviceName: name,
            serviceId: _id,
            review: review,
        }

        // review send to the DB 
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Review added')
                reviewForm.reset()
            }
        })

    }
    return (
        <div>
            <h1 className='text-center my-10 text-4xl font-semibold'>All details for : {name} </h1>
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
                <h1 className='text-center my-10 text-4xl font-bold'>Reviews for this service </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* section for displaying Others reviews  */}
                    <div className="">
                        <h1 className='text-center text-3xl font-semibold mb-10'>Others reviews:</h1>
                        {/* review cart  */}
                        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
                            {/* cart one  */}
                            {
                                someReview.map(review => <OthersReviewCart
                                key={review._id}
                                reviews={review}
                                ></OthersReviewCart>)
                            }

                            {/* cart tow  */}
                            
                        </div>
                    </div>

                    {/* section for collect new review from user  */}
                    <div className="">
                        <h1 className='text-center text-3xl font-semibold'>Your review</h1>
                        {/* conditional rendering  */}
                        {
                            user?.email ?
                            <h1 className='text-center  font-semibold'>{user?.email}</h1>
                            :
                            <h1 className='text-center  font-semibold'>Please <Link to='/login'><span className='text-primary text-2xl'>Login</span></Link> to add your review </h1>
                        }

                        {/* review form  */}
                        <form onSubmit={handleReview} className="card-body">



                            {/* <div className="form-control lg:ml-32"> */}
                            <label className="label">
                                <span className="label-text text-xl">Review:</span>
                            </label>
                            <textarea name='review' onClick={handleTextArea} className="textarea textarea-secondary  h-56 " placeholder="Write yor review" required></textarea>


                            

                            {/* </div> */}
                            <div className="form-control ">
                                <button className="btn bg-gradient-to-r from-yellow-300  to-red-500 ">Add review</button>
                            </div>

                        </form>

                    </div>
                </div>


            </div>
            <ToastContainer/>
        </div>
    );
};

export default ServiceDetails;