import React from "react";

export default function Book ({title, author, category, description}){
    return <div className={'book-box_element'} key={category}>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <span>{category}</span>
        <p>{description}</p>
    </div>
}