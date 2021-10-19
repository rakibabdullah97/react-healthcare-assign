import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    //firebase data fetched here
    const {handleUserRegister} = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //email and password handler
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    };
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    const handleRegister = ()=>{
        handleUserRegister(email,password)
    }

    
    return (
        <div>
            <div className="container p-5 d-flex justify-content-center ">
                <div>
                <h1 className=''>Register Here</h1>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email address</label>
                        <input onChange={handleEmail} style={{ width: "420px" }} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input onChange={handlePassword} style={{ width: "420px" }} type="password" className="form-control " id="exampleInputPassword1" placeholder='Enter Your Password' />
                    </div>
                    <button onClick={handleRegister} type="submit" className="btn btn-primary">Register</button>
                    <div className=''>
                        <p>Already Have An Account?</p><Link to='/login'>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;