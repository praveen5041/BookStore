import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {  BrowserRouter, Routes,Route} from 'react-router-dom'
import AddBook from './components/pages/AddBook';
import Books from './components/pages/Books';
import BookDetails from './components/Book/BookDetails'
function App() {
  return (
       <BrowserRouter>
        <Navbar/>
         <Routes>
           
          <Route   path='/' element={<Home/>}/>
          <Route path='/addBook' element={<AddBook/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/books/:id' element={<BookDetails/>}/>
          </Routes>
           
        </BrowserRouter>
  );
}

export default App;
