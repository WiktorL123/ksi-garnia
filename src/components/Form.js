import React from "react";

export default function Form (){


    function addBook(e) {   e.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let category = document.getElementById('category').value;
        let description = document.getElementById('description').value;

        const newBookDiv = document.createElement('div');
        newBookDiv.className = 'book-box_element';
        newBookDiv.setAttribute('data-category', category);

        newBookDiv.innerHTML = `
            <h1>${title}</h1>
            <h2>${author}</h2>
            <span>${category}</span>
            <p>${description}</p>
         
        `;

        const bookBox = document.querySelector('.book-box');
        bookBox.appendChild(newBookDiv);


        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('description').value = '';
    }

    return <form>
        <label> wpisz tytul
            <input type='text' placeholder='tytul' id='title'/>
        </label>
        <label> wpisz autora
            <input type='text' placeholder='autor' id='author'/>
        </label>
        <label> wybierz kategorie
            <select id='category'>
                <option value='Magiczny realizm'>Magiczny realizm</option>
                <option value='Klasyka'>Klasyka</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Dystopia'>Dystopia</option>
            </select>
        </label>
        <label> wpisz autora
            <textarea  placeholder='krotki opis' id='description'/>
        </label>
        <button onClick={addBook} type='submit'>Wyślij</button>
    </form>
}