import React from 'react';
import { FaHandPointDown, FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Status = () => {
    return (
        <div className='container'>
            <h1>We have booked Your Appointment <FaDoorOpen/> </h1>

            <form className="container mx-0 d-flex justify-content-center my-5 py-5  ">
                <div>
                    <h5>You can Check your reports online Here <FaHandPointDown/></h5>
                    <p>Log in To get Your reports</p>
                    <div className="mb-3">
                        <label htlmFor="exampleInputEmail1" className="form-label">Patient Id</label>
                        <input style={{ width: "380px" }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 ">
                        <label htlmFor="exampleInputPassword1" className="form-label">Password</label>
                        <input style={{ width: "380px" }} type="password" className="form-control " id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/home'><button type="submit" className="btn btn-danger mx-2">Take Me Home</button></Link>
                </div>
            </form>
        </div>
    );
};

export default Status;