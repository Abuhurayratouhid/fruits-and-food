import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img  alt=''src="https://images.hollandandbarrettimages.co.uk/health-hub/2021/m06/acidic-fruit-280416734.jpg" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt=''src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJppCZs_mOReI4MoSbDImNASE_S8DYVinPQ&usqp=CAU" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbmiby_AVWiMKlyMahaROaKjakHE0GJd_eg&usqp=CAU" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            
        </div>
    );
};

export default Carousel;
