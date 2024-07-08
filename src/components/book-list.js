import BookShow from "./book-show";

function BookList ({books, onDelete, onEdit}) {

  const renderedBooks = books.map((book) => {
    return (<BookShow
     key={book.id} 
     onDelete={onDelete}
     onEdit={onEdit}
     book={book}>
    </BookShow>);
  });

  return (<div className='book-list'>
    {renderedBooks}
  </div>);
}
export default BookList;