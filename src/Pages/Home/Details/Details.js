import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data.find(x => x.id === +serviceId)))
    }, [])
    console.log(service)
    return (
        <div className="container">
            <h2 className="d-flex justify-content-center m-3 fw-bold font-monospace text-uppercase "> This is our service description page</h2>
            <p class="text-muted d-flex justify-content-center">We are waiting for your Appointment </p>
            <div className="d-flex justify-content-center mt-2 " >
                <div className="card  " style={{ width: "28rem" }}>
                    <img src={service.img} className="card-img-top" alt="..." />
                    <div className="card-body aline-item-center">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                        <h5 className="card-title">Cost:${service.price}</h5>
                        <Link to='/appointment'>
                        <a href="p" className="btn btn-warning">Appointment</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;