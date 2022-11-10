import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update = () => {
    const review = useLoaderData()
    const [test, setTest] = useState(review)
    const [updateReview , setUpdateReview] = useState(review)
    console.log( updateReview)
    // const updatedReview = {
    //     updateReview,
    // }

    const handleUpdateReview= (event)=>{
        event.preventDefault();
        const form = event.target;
        const newReview = form.newReview.value;
        const updatedReview = {
            updatedReview : newReview,
        }
        setUpdateReview(updatedReview)

        // // console.log(newReview)
        fetch(`http://localhost:5000/updateReview/${review._id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Review Updated')
            }
        })
    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold '> Update your review {review?.serviceName}</h1>
            <form onSubmit={handleUpdateReview} className="card-body">
                        
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={review?.email} placeholder="email" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Previous review:</span>
                            </label>
                            <textarea name='newReview' className="textarea border-spacing-2" defaultValue={review?.review}></textarea>
                            
                            
                        </div>
                        <div className="form-control ">
                            <button type='submit' className="btn bg-gradient-to-r from-yellow-300  to-red-500 ">Update</button>
                        </div>
                        
                    </form>

                    <ToastContainer/>
        </div>
    );
};

export default Update;