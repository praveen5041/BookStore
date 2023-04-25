import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'

function AddBook() {
  // const history=useNavigate()
  const [name, setName]=useState("")
  const [author, setAuthor]=useState("")
  const [image, setImage]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

    //  console.log(e.target.name, "Value", e.target.value);
 // };
  // const sendRequest = async () => {
  //   await Axios
  //     .post("http://localhost:5000/books", {
  //       name: String(setInputData.name),
  //       author: String(setInputData.author),
         
  //       image: String(setInputData.image),
         
  //     })
  //     .then((res) => res.data);
  // };


  const handleSubmit=async (e)=>{
    e.preventDefault();
    setIsLoading(true)
    try{
       const res=await Axios.post("https://bookstore-3vyz.onrender.com/books",{
        //const res=await Axios.post("http://localhost:5000/books",{
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
   // console.log()
    // sendRequest().then(() => history("/books"));
  }

  return (

    <div>
      {isLoading?(<Spinner/>):(

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
        <button className='btn btn-primary' type='submit'>AddBook</button>
      </div>

    </div>
    </form>
    )}
    </div>
  )
}

export default AddBook