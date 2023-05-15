import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AdminSignup = () => {

    const navigate = useNavigate();

    const [admin, setadmin] = useState({
        fullname : "",
        email : "",
        password : "",
        address : "",
        contactnum : ""
    });

    // Handle Inputs
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setadmin({...admin, [name]:value});
    }

    // Handle Submit
    const handleSubmit = async (event)=>{
        event.preventDefault();
        // Objecet Destructuring
        // Store Object data into variables
        const{fullname, email, password, address, contactnum} = admin;
        try{
            // It is submitted on port 3000 by default
            // 
            const res = await fetch('/adminsignup', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    fullname, email, password, address, contactnum
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Details Already Used Or The Fields Are Empty")
            }else{
                window.alert("Sign Up Complete");
                navigate('/adminlogin');
            }
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2 ">
                        <h1 className="display-4 fw-bolder">Hello, There</h1>
                        <p className="lead text-center">Enter Your Details To Sign Up As An Admin</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/adminlogin" className="btn btn-outline-light rounded-pill pb-2 w-50">Login as Admin</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h4 className="mb-5 text-center">Create an account to manage the website as an admin</h4>
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="fullname" name="fullname" value={admin.fullname} onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" value={admin.email} onChange={handleInput}/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" value={admin.password} onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" name="address" value={admin.address} onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="contactnum" class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id="contactnum" name="contactnum" value={admin.contactnum} onChange={handleInput}/>
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

export default AdminSignup;