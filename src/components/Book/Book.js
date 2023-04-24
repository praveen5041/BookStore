import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };


  // const updateHandle=async()=>{
  //    try{
  //     const res=await axios.put(`http://localhost:5000/books/${_id}`,{
  //       name,
  //       author,
  //       image,
  //     })
  //     console.log(res.data)
  //     if(res.data){
  //       history('/books')
  //     }
      // setName('')
      // setAuthor('')
      // setImage('')

  //   }catch(err){
  //     console.log(err)
  //    }
  // }
  // function MyButton({_id}){
  //   function handleClick(){
  //     window.location.href=`/books${_id}`
  //   }
  //   handleClick()
  // }
  // MyButton()
  
  return (
    <div className="card "  >
      <img   src={image} alt={name}  />
      {/* <img src={image} className="card-img-top"></img> */}
      <article>By {author}</article>
      <h3>{name}</h3>
    
      <Button as={Link} to={`/books/${_id}`} variant="primary" className="mt-auto" size="sm">
      Update
    </Button>
      <button className="btn btn-danger mt-auto btn-sm"  onClick={deleteHandler}>Delete</button>

      {/* <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button> */}
    </div>
  );
};

export default Book;
