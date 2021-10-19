import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.png'


const Error = () => {
    return (
        <div className='container '>
           <div className='d-flex justify-content-center'>
           <img style={{ width: "100%" }} src={error} alt='..' />
           </div>
            <div  className='d-flex justify-content-center m-3'><Link to='/home'>
                <a href="p" className="btn btn-danger">Take Me Home</a>
            </Link></div>
        </div>
    );
};

export default Error;