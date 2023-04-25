import { Button} from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import { useState } from "react";
const Book = (props) => {
  const history = useNavigate();

  const [show, setShow] = useState(false);
   
  const { _id, name, author, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://bookstore-3vyz.onrender.com/books/${_id}`)
      //.delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
       setShow(true)
       
       
  };
   
 
  
  return (
    <div className="card "  >
      <img   src={image} alt={name}  />
      {/* <img src={image} className="card-img-top"></img> */}
      <article>By {author}</article>
      <h3>{name}</h3>
     
      <Button as={Link} to={`/books/${_id}`} variant="primary" className="mt-auto" size="sm">
      Update
    </Button>
       

    {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You want to delete this item?</Modal.Title>
        <Modal.Body>Are You cConfirm??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete} >Ok</Button>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal.Header>
    </Modal> */}

 
       
    
    {/* working function */}
    <button className="btn btn-danger mt-auto btn-sm" onClick={()=>setShow(true)}>Delete</button>
    {show && (
        <div className="container bg-secondary">

          
          <p>Are you sure you want to delete?</p>
          <button className="btn btn-danger btn-sm mr-2" onClick={() => { deleteHandler() }}>Yes</button>
          <button className="btn btn-primary btn-sm" onClick={() => setShow(false)}>No</button>
        </div>
      )}
       
       
       
    </div>
  );
};

export default Book;
