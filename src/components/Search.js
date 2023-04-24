import React, { useEffect } from 'react'
 
import Axios from 'axios'
import { useState } from 'react'
function Search() {
    const [query, setQuery] = useState('')
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetch=async()=>{
            const res=await Axios.get(`http://localhost:5000/books?q=${query}`)
            setData(res.data)
        }
        fetch()
    },[query])
  
  return (
    <div className='sea'>
        <input className='search'placeholder='Search....'onChange={(e)=>setQuery(e.target.value)}/>
        {data}
    </div>
  )
}

export default Search