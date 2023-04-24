import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.webp'
function Navbar() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={logo}alt='' width={45} height={45}></img>
      BookStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item nav-link active" to="/">
          Home  
        </Link>
        <Link className="nav-item nav-link " to="/books">
          Books  
        </Link>
        <Link className="nav-item nav-link" to="/addBook">
          AddBook  
        </Link>
         
        
      </ul>
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar