import React from 'react'
import Book from "./Book.tsx";

interface Props {
data:{    title:string
    text: string
    imgsrc:string}
}

export default function twomain(props:Props) {
  return (
    <div style={{display:'flex'}}>
      {/* <Book title={props.title} imgsrc={props.imgsrc} text={props.text}/> */}
      {/* <Book  title='second' imgsrc='https://picsum.photos/id/23/200/300' text='yewtrewitrireytirt'/>
      <Book  title='third' imgsrc='https://picsum.photos/id/22/200/300' text='nrevkurenvireqbvreiv'/> */}
    </div>
  )
}
