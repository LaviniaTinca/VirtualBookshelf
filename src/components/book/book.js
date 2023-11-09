import React from 'react'
import "./book.scss";

const Book = ({image, title, author, year, rating}) => {
const handleClick = () => {
    console.log(title)
}
  return (
    <>
    <div className="shelf-list_book">
        <img src={image} alt={"Don't make me think"} onClick={handleClick}/>
        <div className="shelf-list_book_meta">
            <div className="shelf-list_book_meta-title">
            {title}
            </div>
            <div className="shelf-list_book_meta-author">
            {author}, {year}
            </div>
            <div className="shelf-list_book_meta-rating">
            <span>{rating}</span>/5
            </div>
        </div>
    </div>
    </>
  )
}

export default Book