import React from 'react'
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <section id="aboutus">
                <div className='container my-5 py-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/aboutus1.jpg" alt="AboutUS"
                                className="w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mt-5">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50" />
                            <p className="lead mb-4">We are passionate about creating a positive impact on the world by revolutionizing the way we manage and reduce food wastage. Founded with a clear vision and driven by a team of dedicated individuals, our mission is to tackle one of the most pressing global issues of our time. With a deep understanding of the challenges the food industry faces, we recognized the need for an innovative solution that could bridge the gap between surplus food and those in need. Our Waste Food Management System was born out of this realization, with a strong commitment to sustainability.</p>
                            <NavLink to="/service" className="btn btn-warning rounded-pill px-4 py-2">Get Started</NavLink>
                            <NavLink to="/contactus" className="btn btn-outline-warning rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;