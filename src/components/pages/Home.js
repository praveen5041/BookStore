import React from 'react'
import '../pages/Home.css'
import Book from '../images/book1.jpeg'
import { Link } from 'react-router-dom'
import github from '../images/github.png'
import mail from '../images/email.png'
import linkedin from '../images/linkedin.png'
import AOS from 'aos'
import "aos/dist/aos.css";
function Home() {
  AOS.init()
  return (
    <div className='Home_page bg-dark text-white container-fluid'>
        <div className='row container ' data-aos="fade-left">
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:"91.5vh"}}>
                <h2 style={{fontSize:"70px"}}>Books Store for you</h2>
                <Link to='/userdashboard' className='viewBook my-3'>View Books</Link>
            </div>
            <div className='img-fluid Home_img col-lg-6 d-flex justify-content-center  flex-column '>
                 <img src={Book} alt='/'></img>
            </div>
        </div>
        <div className='footer' data-aos="fade-right">
        <div className="social-icon">
       <a
         href="https://github.com/praveen5041"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={github} className="icon github" alt="" />
       </a>
       <a
         href="https://www.linkedin.com/in/praveen-midathapally-3a8157226/"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={linkedin} className="icon" alt="" />
       </a>
       
       <a
         href="mailto:midathapallypraveen123@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={mail} className="icon" alt="" />
       </a>
     </div>
     <div className="personal-info">
       <p>Created with ❤️ using MERN by </p>
       <h4>
         <span className="symbol">&#60;</span>Praveen Midathapally
         <span className="symbol">/&#62;</span>
       </h4>
       <h6>Full Stack Developer</h6>
       
     </div>
     <h5 style={{ textAlign: "center" }}>
       Copyright © 2023 Praveen Midathapally. All rights reserved.
     </h5>
        </div>

    </div>
  )
}

export default Home