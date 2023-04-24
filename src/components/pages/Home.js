import React from 'react'
import '../pages/Home.css'
import Book from '../images/book1.jpeg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home_page bg-dark text-white container-fluid'>
        <div className='row container'>
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:"91.5vh"}}>
                <h2 style={{fontSize:"70px"}}>Books Store for you</h2>
                <Link to='/books' className='viewBook my-3'>View Books</Link>
            </div>
            <div className='img-fluid Home_img col-lg-6 d-flex justify-content-center  flex-column '>
                 <img src={Book} alt='/'></img>
            </div>
        </div>
        <div className='footer'>

        </div>

    </div>
  )
}

export default Home