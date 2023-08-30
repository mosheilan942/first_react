import React from 'react'
import Book from "./Book.tsx";
import book from '../ts/type.ts';


interface Props {
  books: book[]
}

export default function twomain(props: Props) {
  const { books } = props
  return (
    <div style={{ display: 'flex' }}>

      {books.map((book) => (<Book Book={book}/>))}

    </div>
  )
}
