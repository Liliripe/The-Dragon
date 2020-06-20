import React from 'react'

import { BookTitle, BookAuthor } from './style'

const Books = ({ title, author, ...props }) => {
    return (
      <li>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </li>
    )
}

export default Books
