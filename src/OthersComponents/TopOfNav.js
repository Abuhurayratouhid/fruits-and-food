import React from 'react';

const TopOfNav = () => {
    return (
        <div className='flex justify-between text-white bg-gradient-to-r from-yellow-300  to-red-500'>
            <div className=''>
            <h1 className=''><small>Free Shipping On Order Above $50</small></h1>
            </div>
            <div>
            <h1 className='hidden lg:block'><small>open : 6 am to 9 pm</small></h1>
            </div>
            <div>
            <h1 className='hidden lg:block'><small>Need help? Call Us: +8 88 55 4168</small></h1>
            </div>
        </div>
    );
};

export default TopOfNav;