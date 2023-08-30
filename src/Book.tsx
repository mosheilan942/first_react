import React from 'react'
import Title from "./title";

interface Props {
    title:string
    text: string
    imgsrc:string
}

export default function Book(props: Props) {
  return (
    <div>
        <title>{props.title}</title> 
        <img src={props.imgsrc} alt="img" />
        <p>{props.text}</p>
    </div>
  )
}
