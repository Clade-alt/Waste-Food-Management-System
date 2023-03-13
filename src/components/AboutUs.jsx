import React from 'react'

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
                    <div className="col-mb-0">
                        <h3 className="fs-5 mt-5">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className="w-25"/>
                        <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rerum id omnis ad dolores vitae minus voluptates soluta ipsum, aspernatur magni nobis unde cupiditate, repudiandae exercitationem amet culpa? A iste, id aliquam odio maxime aspernatur officia laborum ducimus deserunt maiores voluptates. Aspernatur itaque aliquam similique soluta praesentium, quaerat consectetur unde.</p>
                        <button className="btn btn-warning rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-warning rounded-pill px-4 py-2 ms-2">Contact Us</button>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs;