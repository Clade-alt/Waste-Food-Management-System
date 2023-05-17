import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white"> Let's Reduce Food Wastage</h1>
              <p className="lead text-center fs-4 mb-5 text-white">Welcome to our Waste Food Management System, where we believe in making a significant impact on reducing food wastage. We are committed to addressing the global challenge of food waste and creating a sustainable future for all.</p>
              <p className="lead text-center fs-4 mb-5 text-white">In today's world, where millions suffer from hunger and environmental concerns are at an all-time high, it is imperative that we take action. Our waste food management system offers innovative solutions to combat the alarming levels of food waste that occur at various stages of the supply chain.</p>
              <p className="lead text-center fs-4 mb-5 text-white">Join us in our mission to reduce food wastage and create a better future for everyone. Together, we can make a tangible difference in the lives of individuals, foster environmental sustainability, and promote social responsibility. Let's embrace the power of technology and collective action to tackle one of the world's most pressing challenges – food waste.</p>
              <p className="lead text-center fs-4 mb-5 text-white">Explore our Waste Food Management System and be a part of the movement to build a more equitable, efficient, and sustainable food ecosystem. Together, let's reduce food wastage and ensure that no plate goes empty and no resource goes to waste.</p>
              <div className="buttons d-flex justify-content-center">
                <NavLink to="/service" className="button btn btn-outline-light me-4 rounded-pill px-5 py-3 fs-5">Explore</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;