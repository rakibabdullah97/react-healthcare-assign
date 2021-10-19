import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import {FaKey} from 'react-icons/fa'



const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div>

            <form className="container m-2 d-flex justify-content-center my-5 ">
                <div>
                    <h1>Please Log in To Proceed <FaKey/> </h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input style={{ width: "350px" }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input style={{ width: "350px" }} type="password" className="form-control " id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={signInUsingGoogle} className="btn btn-primary m-2">google Sign in</button>
                    <div className=''>
                        <p>New Here?</p><Link to='/register'>
                            <button type="submit" className="btn btn-primary">Register Now</button>
                        </Link>

                    </div>

                </div>
            </form>
        </div>
    );
};

export default Login;