'use strict'
import React from 'react';
import ReactDOM from 'react-dom/client'
import BookCatalog from "./components/BookCatalog";
import books from './data/data.json'

// const books = [{
//     title: "Władca Pierścieni",
//     author: "J.R.R. Tolkien",
//     category: "Fantasy",
//     description: "Epicka opowieść o walce dobra ze złem w Śródziemiu."
// }
// ]

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookCatalog books={books}/>)
let root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(React.createElement('h2', null, 'aaa'))