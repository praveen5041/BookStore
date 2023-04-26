import React, { useState,useEffect } from 'react'
import UserBook from './UserBook'
import Axios from'axios'
import './UserBook.css'
function AllBooks() {
    const [book,setBook] =useState([])
    const [query, setQuery]=useState("")
    useEffect(()=>{
        const fetchData=async()=>{
       const response=  await Axios.get('https://booksstore.onrender.com/books') 
        //const response=  await Axios.get('http://localhost:5000/books/admin') 
            setBook((response.data.books))
          
        }
        fetchData()
       },[])
       const filteData=book.filter((val)=>{
        return val.name.toLowerCase().includes(query.toLowerCase())||val.author.toLowerCase().includes(query.toLowerCase());
         
       })
       console.log(book)
  return (
    <div>

    {/* search functionality */}
    <div className='text-center ' style={{marginTop:'3rem'}}>
       <input type='text' value={query} placeholder='Search....    Enter  Title or Author'
       style={{width:'30%'}}

       onChange={(event)=>setQuery(event.target.value)} />
      </div>
    <ul>
      {
      book && filteData.map((book, i)=>(
          <li key={i}>
            <UserBook book={book} />
          </li>
        ))
      // filteData.map((book,i)=>{
      //   <li key={i}>
      //     <Book book={book}/>
      //   </li>
     // })
      }
    </ul>
   </div>
  )
}

export default AllBooks