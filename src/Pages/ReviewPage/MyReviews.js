import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contaxt/AuthProvider';
import ReviewCart from './ReviewCart';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    // console.log(reviews)

    


    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    return (
        <div>
            {
                reviews.length > 0 ?
                <h1 className='text-center my-10 text-3xl font-semibold'>You have total: {reviews.length} {reviews.length > 1 ? ' Reviews' : 'Review' }</h1>
                :
                <h1 className='text-center my-10 text-3xl font-semibold'>You have not added any reviews yet</h1>
                
            }
            {
                reviews.map(review => <ReviewCart
                key={review._id}
                reviews = {review}
                ></ReviewCart>)
            }
            
        </div>
    );
};

export default MyReviews;