const express=require('express')
const router=express.Router()
const book_controler=require('../controlers/Books_control')


router.get('/',book_controler.getAllBooks)
//console.log(book_controler.getAllBooks)
router.post('/',book_controler.addBook)
// router.get('/:id',book_controler.getById)
router.delete('/:id',book_controler.deleteBook)
router.put('/:id',book_controler.updateBook)

module.exports=router