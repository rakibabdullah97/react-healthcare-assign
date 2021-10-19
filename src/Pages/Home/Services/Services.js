import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    //called state to carry the data
    const [services,setServices]=useState([])
    // fetched data from jason file my fakedb
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='container'>
            <h1 className='text-center  my-5'> Our World Class <span className='text-warning'>Care</span></h1>
            <div className=' row row-cols-1 row-cols-md-3 g-4'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;