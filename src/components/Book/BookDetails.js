import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
function BookDetails() {
  const id=useParams().id;
  console.log(id)
  useEffect(()=>{
    const fetcHandles=async()=>{
    await Axios .get(`http://localhost:5000/books/${id}`).then((res)=>console.log(res.data))
    }
    fetcHandles()
  },[id])

  const [name, setName]=useState("")
  const [author, setAuthor]=useState("")
  const [image, setImage]=useState("")
  const navigate=useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await Axios.put(`http://localhost:5000/books/${id}`,{
        name,
        author,
        image,
      })
      console.log(res.data)
      if(res.data){
        navigate('/books')
      }
      setName('')
      setAuthor('')
      setImage('')

    }catch(err){
      console.log(err)
    }
  }
  return (
     <div>
      <form onSubmit={handleSubmit}>
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:'91.5vh'}}>
      <div className='container p-4'>
        <div className="mb-3">
          <label  htmlFor="exampleFormControlInput1" className="form-label text-white">Book Name</label>
          <input     type="text" className="form-control" id="exampleFormControlInput1" placeholder="Book Name" 
          value={name} onChange={(e)=>setName(e.target.value )}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Author Name</label>
          <input     type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name" 
          value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Image</label>
          <input   type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Image URL"
          value={image} onChange={(e)=>setImage(e.target.value)} />
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </div>

    </div>
    </form>
     </div>
  )
}

export default BookDetails