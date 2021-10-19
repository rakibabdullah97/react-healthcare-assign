import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className='container'>
            <h1 className='text-success m-3'>Fill up the form below to make an appointment</h1>
            <form className="row g-3 container">
                <div className="col-md-6">
                    <label htlmFor="inputCondition" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputCondition" />
                </div>
                <div className="col-md-6">
                    <label htlmFor="inputName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="col-12">
                    <label htlmFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htlmFor="inputAge" className="form-label">Your Age</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="age please" />
                </div>
                <div className="col-md-6">
                    <label htlmFor="inputCity" className="form-label">Select A Day</label>
                    <select id="inputState" className="form-select">
                        <option selected>Any</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htlmFor="inputState" className="form-label">Gender</label>
                    <select id="inputState" className="form-select">
                        <option selected>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" htlmFor="exampleRadios1">
                            New Patient
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" htlmFor="exampleRadios2">
                            Old Patient
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <Link to='/status'>
                    <button type="submit" className="btn btn-success">Take Appointment </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Appointment;