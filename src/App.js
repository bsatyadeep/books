import React, { useState} from 'react';
import BookCreate from './components/book-create';
import AddColor from './components/add-color';
import BookList from './components/book-list';

function App () {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
   const updatedBooks = [
    ...books,
    {
      id: Math.round(Math.random() * 9999),
      title: title
    }
   ];

   setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      if(book.id !== id){
        return book;
      }
    });

    setBooks(updatedBooks);
  }

  const editBooksById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return {
          ...book,
          title: newTitle
        };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  return (<div className='app'>
    <h1>Reading List</h1>
    <BookList 
      books={books}
      onDelete={deleteBookById}
      onEdit={editBooksById} />

    <BookCreate 
      onBookCreate={createBook} />

    
    {/* <hr /> */}
    {/* <AddColor /> */}
  </div>);
}
export default App;