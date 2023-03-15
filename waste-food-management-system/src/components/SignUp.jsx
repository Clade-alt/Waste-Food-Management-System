import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2 ">
                        <h1 className="display-4 fw-bolder">Hello, There</h1>
                        <p className="lead text-center">Enter Your Details To Sign Up</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h4 className="mb-5 text-center">Create an account to explore all the services and help to reduce the food wastage</h4>
                        <form>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" />
                            </div>
                            <div class="mb-3">
                                <label for="contactnum" class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id="contactnum" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I Agree to the Terms and Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignUp;