import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa'
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle, handleUserLogin } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };
    
    return (
        <div>
            <div className="container m-2 d-flex justify-content-center my-5 ">
                <div>
                    <h1>Please Log in To Proceed <FaKey /> </h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleEmail} required style={{ width: "350px" }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handlePassword} required style={{ width: "350px" }} type="password" className="form-control " id="exampleInputPassword1" />
                    </div>
                    <button onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={signInUsingGoogle} className="btn btn-primary m-2">google Sign in</button>
                    <div className=''>
                        <p>New Here?</p><Link to='/register'>
                            <button type="submit" className="btn btn-primary">Register Now</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;