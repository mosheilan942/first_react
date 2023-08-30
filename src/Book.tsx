import React from 'react'
// import Title from "./title";

interface Props {
  Book :{
    title:string
    text: string
    imgsrc:string
  }
    
}

export default function Book(props: Props) {
  return (
    <div>
        <title>{props.Book.title}</title> 
        <img src={props.Book.imgsrc} alt="img" />
        <p>{props.Book.text}</p>
    </div>
  )
}
