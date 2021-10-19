import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    //decontruched data from service
    const { name, img,info,id } = service
    return (
        <div>
            <div className="card ">
                <img style={{height:250}}  src={img} className="card-img-top img-fluid img-responsive" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <p className ="card-text">{info}</p>
                <Link to={`./details/${id}`}>
                <button type="button" className="btn btn-warning">Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;