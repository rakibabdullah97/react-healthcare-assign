import React from 'react';
import error from '../../images/error.png'


const Error = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <img style={{width:"100%"}} src={error} alt='..'/>
        </div>
    );
};

export default Error;