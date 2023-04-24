const Book =require('../models/Book')
const getAllBooks = async (req, res, next) => {

  // //for search functionality
  // const {q}=req.query;
  // console.log(q)
  // const keys=["name","author"]
  // const search=(books)=>{
  //   return books.filter((item)=>{
  //     keys.some((key)=>item[key].toLowerCase().includes(q))
  //   })
  // }
  // res.json(search(getAllBooks))
    let books;
    try {
      books = await Book.find();  
    } catch (err) {
      console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "No products found" });
      }
      // return res.status(200).json({ books });
      
      // const {q}=req.query;
      // console.log(q)
      // const keys=["name","author"]
      // const search=books.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(q)))
      // // const search=(books)=>{
      //   return books.filter((item)=>{
      //     keys.some((key)=>item[key].toLowerCase().includes(q))
      //   })
      // }
      //res.json(search(books))
 

      // if(!Array.isArray(books)){
      //   console.log(books)
      // }
      // else{
      //   console.log("error occurs")
      // }
      
      return res.status(200).json({ books});
}
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};


const addBook = async (req, res, next) => {
    const { name, author, image } = req.body;
    let book;
     
    try {
      book = new Book({
        name ,
        author ,
        image ,
      });
      await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
  
   
    return res.status(201).json({ book });
  };
  

  const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, image } = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id, {
        name,
        author,
        image,
      });
      book = await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  };

  const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndRemove(id)
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  

exports.getAllBooks=getAllBooks
exports.addBook=addBook
exports.getById=getById
exports.deleteBook=deleteBook
exports.updateBook=updateBook