import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios';
import Book from '../Book/Book'
import '../Book/Book.css'
function Books() {
  const [data, setData]=useState([])
  const [query, setQuery]=useState("")
   useEffect(()=>{
    const fetchData=async()=>{
   const response=  await Axios.get('https://bookstore-3vyz.onrender.com/books') 
   // const response=  await Axios.get('http://localhost:5000/books') 
        setData((response.data.books))
      
    }
    fetchData()
   },[])
   const filteData=data.filter((val)=>{
    return val.name.toLowerCase().includes(query.toLowerCase())||val.author.toLowerCase().includes(query.toLowerCase());
     
   })
   console.log(data)

  //  const searchHandle=async (event)=>{
  //   // console.warn(event.target.value)
  //   let key=event.target.value;
  //   let result=await fetch(`http://localhost:5000/books/${key}`)
  //   result=await result.json()
  //   console.log(result)
  //   if(result){
  //     setData(result.json())
  //   }
  //  }
  return (
    
       <div>

        {/* search functionality */}
        <div className='text-center'style={{marginTop:'3rem'}} >
           <input type='text' value={query} placeholder='Search....    Enter  Title or Author'
           style={{width:'30%'}}
           onChange={(event)=>setQuery(event.target.value)} />
          </div>
        <ul>
          {
           data&& filteData.map((book, i)=>(
              <li key={i}>
                <Book book={book} />
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

export default Books