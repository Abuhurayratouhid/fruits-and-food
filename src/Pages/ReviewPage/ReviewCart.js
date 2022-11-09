import React from 'react';

const ReviewCart = ({reviews}) => {
    const {serviceName, review, _id} = reviews;
    // console.log(_id)

    const handleDelete = (_id)=>{
        const deleteConfirmation = window.confirm('Are you sure to delete this review')
        if(deleteConfirmation){
            fetch(`http://localhost:5000/review/${_id}`)
        }
        console.log(_id)
    }
    return (
        <div className="card m-2 bg-gray-300 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title"> Review for : {serviceName} service</h2>
                <p>Your Review: <br /> {review}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-gray-400">Edit</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;