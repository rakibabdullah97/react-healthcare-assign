import React from 'react';
import Blog from '../Blog/Blog';
import chart from '../../../../images/chartcovid.jpeg'

const News = () => {
    return (
        <div id='news' className="row justify-content-around container mx-3">
            <h1 className='text-center  my-5'>Get Covid updates From our <span className='text-warning'>News Section</span> </h1>
            <div className='col-lg-5 col-12 '>
                <img style={{ height: '70%' }} className='img-fluid w-100 ' src={chart} alt='' />
            </div>
            <div className='col-lg-5 col-12'>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default News;