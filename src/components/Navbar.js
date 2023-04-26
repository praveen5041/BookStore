import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.webp'
import '../components/Navbar.css'
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
// import AOS from 'aos'
// import { useState } from 'react'
=======
//import { useState } from 'react'
>>>>>>> 94fd619ed6d549b83388cf6f378aeeb692d0fef8
function Navbar() {
  // AOS.init()
  // const [loading, setLoading] = useState(false);
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary " >
<<<<<<< HEAD
  <div className="container ">
    <a className="navbar-brand same" href="/">
=======
  <div className="container bg-primary">
    <a className="navbar-brand" href="/">
>>>>>>> 94fd619ed6d549b83388cf6f378aeeb692d0fef8
      <img src={logo}alt='' width={45} height={45}  ></img>
      BookStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item nav-link same" to="/">
          Home  
        </Link>
        <NavLink className="nav-item nav-link same" to='/userdashboard'>
          UserDashboard
        </NavLink>
        <NavLink className="nav-item nav-link same"  to="/books"
          >AdminDashboard  </NavLink>
        {/* <NavLink
      className="nav-item nav-link books-link"
      to="/books"
      onClick={() => setLoading(true)}
      isactive={(match, location) => {
        if (match) {
          setLoading(false);
        }
        return match;
      }}
    >
      Books
      <div className={`spinner ${loading ? 'active' : ''}`}>
        {loading && 'Loading...'} 
      </div>
    </NavLink> */}

        <Link className="nav-item nav-link same" to="/addBook">
          AddBook  
        </Link>
        {/* <button className='btn btn-primary '>
        <Link to="/addBook" className="nav-link">Add Book</Link>
        </button> */}
         
        {/* <a href="/addBook" class="btn btn-primary" role="button" data-bs-toggle="button">AddBook</a> */}
      </ul>
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
