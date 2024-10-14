'use strict'
import React from 'react';
import ReactDOM from 'react-dom/client'
import BookCatalog from "./components/BookCatalog";
import books from './data/data.js'
import Form from './components/Form'



let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookCatalog books={books}/>)
let root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(<Form/>)