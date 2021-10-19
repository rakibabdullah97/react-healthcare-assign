import React from 'react';

const FindDoc = () => {
    return (
        <div id='needADoc' className='container mt-5 bg-light p-3 mb-5'>
            <h2 className='text-danger fw-bold font-monospace'>Looking for a Doc !</h2>
            <form className="row g-3 container">
                <div className="col-md-6">
                    <label for="inputCondition" className="form-label">Condition or Specialty</label>
                    <input type="text" className="form-control" id="inputCondition" />
                </div>
                <div className="col-md-6">
                    <label for="inputName" className="form-label">Doctor's Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label for="inputAge" className="form-label">Patient's Age</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="age please" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Language</label>
                    <select id="inputState" className="form-select">
                        <option selected>Any</option>
                        <option>English</option>
                        <option>Bangla</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Doctor's Gender</label>
                    <select id="inputState" className="form-select">
                        <option selected>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            New Patient
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            Old Patient
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Get A Doc</button>
                </div>
            </form>
        </div>
    );
};

export default FindDoc;