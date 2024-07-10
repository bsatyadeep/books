import { useContext } from "react";
import BooksContext from "../context/books";

import BookShow from "./book-show";

// function BookList ({books, onDelete, onEdit}) {
  function BookList () {
    const {books} = useContext(BooksContext);

  // const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    // return (<BookShow
    //  key={book.id} 
    //  onDelete={onDelete}
    //  onEdit={onEdit}
    //  book={book}>
    // </BookShow>);

    return (<BookShow
      key={book.id} 
      book={book}>
     </BookShow>);
  });

  return (<div className='book-list'>
    {/* {count}
    <button
      onClick={incrementCount}>
      Click Me!
    </button> */}

    {renderedBooks}
  </div>);
}
export default BookList;