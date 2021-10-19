import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>this is register page</h1>
            <form className="container p-5 d-flex justify-content-center ">
                <div>
                    <div className="mb-3">
                        <label for="InputEmail1" className="form-label">Email address</label>
                        <input style={{ width: "420px" }} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3 ">
                        <label for="InputPassword" className="form-label">Password</label>
                        <input style={{ width: "420px" }} type="password" className="form-control " id="exampleInputPassword1" placeholder='Enter Your Password' />
                    </div>
                    <div className="mb-3 ">
                        <label for="InputPasswordAgin" className="form-label">Reenter Your Password</label>
                        <input style={{ width: "420px" }} type="password" className="form-control " id="exampleInputPassword1" placeholder='Re Enter Your Password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className=''>
                        <p>Already Have An Account?</p><Link to='/login'>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </Link>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;