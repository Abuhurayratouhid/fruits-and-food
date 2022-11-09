import React, { useContext } from 'react';
import { AuthContext } from '../../Contaxt/AuthProvider';

const ReviewCart = ({reviews , handleDelete}) => {
    const {user} = useContext(AuthContext)
    const {serviceName, review, _id} = reviews;
    // console.log(_id)

    
    return (
        <div className="card m-2 bg-gray-300 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title"> <img className='h-16 w-16 rounded-full' src={user?.photoURL} alt="" /></h2>
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