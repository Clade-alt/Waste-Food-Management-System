import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white"> Let's Reduce Food Wastage</h1>
              <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quod illum non illo ad nostrum cumque quidem eum deleniti minima.</p>
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