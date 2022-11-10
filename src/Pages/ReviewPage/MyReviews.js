import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contaxt/AuthProvider';
import ReviewCart from './ReviewCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My-Reviews')
    // console.log(reviews)

    


    useEffect(()=>{
        fetch(`http://localhost:5000/userReview?email=${user?.email}`,{
            headers: {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])



    const handleDelete = (_id)=>{
        const deleteConfirmation = window.confirm('Are you sure to delete this review')
        if(deleteConfirmation){
            fetch(`http://localhost:5000/review/${_id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('successfully deleted')
                    const remaining = reviews.filter(rev => rev._id !== _id);
                    setReviews(remaining)
                }
            })
            
            
        }
        
    }
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
                handleDelete={handleDelete}
                ></ReviewCart>)
            }
          <ToastContainer />   
        </div>
    );
};

export default MyReviews;