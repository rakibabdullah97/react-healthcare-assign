import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner-1.jpg'
import banner2 from '../../../images/banner-2.jpeg'
import banner3 from '../../../images/banner-3.jpg'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{height:"80vh"}} src={banner1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='text-warning'>Welcome To Atrium Health Care</h1>
                            <p className='text-light'>Our goal is your Satisfy.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{height:"80vh"}} src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>World Class Doctor is waiting For you</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{height:"80vh"}} src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Covid free Zone </h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;