import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] =useState({
        email : '',
        password : ''
    });

    // Handle Input
    const handleChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setUser({...user, [name]:value})
    }

    // Handle Login
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {email,password} = user;
        try{
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email, password
                })
            });

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert("Login Successful")
                navigate('/');
                window.location.reload();
                
            }
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form ">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/signup" className="btn btn-outline-light rounded-pill pb-2 w-50">Sign Up</NavLink>&nbsp;
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/adminlogin" className="btn btn-outline-light rounded-pill pb-2 w-50">Login as an Admin</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h4 className="display-6 mb-5 text-center">Please Login Below To Explore All Our Services</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange}/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" value={user.password} onChange={handleChange}/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;