import React from 'react';

const ReviewInHome = ({reviews}) => {
    const {userPhoto, userName, review, serviceName} = reviews;
    return (
        <div>
            <div className="card w-80 bg-base-200 lg:ml-10">
                <div className="card-body">
                    <div className='flex'>
                        <h2 className="card-title"><img className='h-10 rounded ' src={userPhoto} alt="" /></h2>
                        <h2 className="card-title ml-3">{userName}</h2>
                    </div>
                    <p className='text-xl'>Review for:{serviceName}</p>
                    <p className='text-xl'>Review:</p>
                    <p>{review}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewInHome;