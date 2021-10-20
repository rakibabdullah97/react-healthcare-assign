import React from 'react';
import { FaHandPointDown, FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Status = () => {
    return (
        <div className='container'>
            <h1>We have booked Your Appointment <FaDoorOpen /> </h1>

            <form className="  d-flex justify-content-center my-5 py-5  ">
                <form className='container'>
                    <div className='row g-3'>
                        <h5>You can Check your reports online Here <FaHandPointDown /></h5>
                        <p>Log in To get Your reports</p>
                        <div className="mb-3 col-md-5">
                            <label htlmFor="exampleInputEmail1" className="form-label">Patient Id</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-md-5 ">
                            <label htlmFor="exampleInputPassword1" className="form-label">Report Serial Number</label>
                            <input required type="number" className="form-control " id="exampleInputPassword1" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/home'><button type="submit" className="btn btn-danger mx-2">Take Me Home</button></Link>
                </form>
            </form>
        </div>
    );
};

export default Status;