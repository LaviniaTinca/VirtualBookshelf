import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Book from '../../components/book'
import { useDispatch } from 'react-redux'
import { removeBook } from '../../store/slices/booksReducer'

const MyShelf = () => {
    const books = useSelector((state)=> state.library.books)
    const dispatch = useDispatch()
    const handleRemoveBook = (id) => {
        console.log(id)
        dispatch(removeBook(id))
    }
  return (
    <div id='myShelf'>
        <h1>My Shelf</h1>
        {books.map((book) => (
        <div key={book.id}>
          <Book
            title={book.titlu}
            author={book.autor}
            year={book.an}
            rating={book.rating}
          />
          <button onClick={() => handleRemoveBook(book.id)}>Remove Book</button>
        </div>
      ))}
        
    </div>
  )
}

export default MyShelf