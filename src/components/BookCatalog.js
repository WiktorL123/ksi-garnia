import React from 'react'
import Book from "./Book";



export default function  BookCatalog  ({books}){

        function handleChangeCategory (value){
            const bookDivs = document.querySelectorAll('.book-box_element')

            bookDivs.forEach(bookDiv=>{
                const category = bookDiv.getAttribute('data-category');
                category === 'all' || category===value? bookDiv.style.display='block':bookDiv.style.display='none'

            })



        }


       return <div className={'book-box'}>
           <select onChange={e=>handleChangeCategory(e.target.value)}>
               <option value='all'>Wszystko</option>
               <option value='Magiczny realizm'>Magiczny realizm</option>
               <option value= 'Dystopia'>Dystopia</option>
               <option value = 'Fantasty'>fantasy</option>

           </select>

            {books.map((book, i)=>{
                return <Book
                    key={i}
                    title = {book.title}
                    author = {book.author}
                    category = {book.category}
                    description = {book.description}
                />
            })}

        </div>

}
