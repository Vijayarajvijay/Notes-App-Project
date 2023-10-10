import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return ( <>
    <section id="hero" className="d-flex align-items-center col-md-">
    <div className="container col-3 " id='homein' data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>Notes App</span></h1>
      <h2>This is simple application for taking a notes</h2>
      <Link to='/note'>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
      </Link>
    </div>
  </section>
  </>
  )
}

export default Home