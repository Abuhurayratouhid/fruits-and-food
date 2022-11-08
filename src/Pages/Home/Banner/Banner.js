import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-slate-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='bg-slate-100  md:h-[30rem] p-10 md:rounded-r-full'>
                    <h1 className="text-5xl font-bold md:pt-20"><span className='text-yellow-300'>Fruits</span> & <span className='text-red-900'>food</span> <br /> delivery service</h1>
                    <p className="py-6">Fresh fruits and organic  vegetables. also natural and healthy food.  Eat healthy food and be happy in your life.</p>
                    <button className="btn border-none bg-gradient-to-r from-yellow-500  to-red-500">Order now </button>
                </div>
                <div>
                <img alt='fruits' src="https://i.ndtvimg.com/i/2017-10/fruits-and-vegetables-620x350_620x350_41507031507.jpg" className=" rounded-lg shadow-2xl" />
                <img alt='fruits' src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" className="h-56 w-full rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;