import React, { useEffect } from 'react';
import BookCreate from './components/book-create';
// import AddColor from './components/add-color';
import BookList from './components/book-list';
// import axios from 'axios';

// import BooksContext from './context/books';

import useBooksContext from './hooks/use-books-context';

function App () {
  // const [books, setBooks] = useState([]);

  // const fetchBooks = async () => {
  //   const response = await axios.get('http://localhost:3001/books');

  //   // const updatedBooks = [
  //   //   ...books,
  //   //   response.data
  //   // ];

  //   setBooks(response.data);
  // }

  // const {fetchBooks} = useContext(BooksContext);
  const {fetchBooks, stableFetchBooks} = useBooksContext();

  useEffect(() => {
    stableFetchBooks();
  },[]);

  // const createBook = async (title) => {
  //   const response = await axios.post('http://localhost:3001/books', {
  //     title
  //   });

  //   const updatedBooks = [
  //     ...books,
  //     response.data
  //   ];

  //   setBooks(updatedBooks);

  // //  const updatedBooks = [
  // //   ...books,
  // //   {
  // //     id: Math.round(Math.random() * 9999),
  // //     title: title
  // //   }
  // //  ];

  // //  setBooks(updatedBooks);
  // }

  // const deleteBookById = async (id) => {
  //   await axios.delete(`http://localhost:3001/books/${id}`);
  //   // console.log(response.data);
  //   fetchBooks();
  //   // const updatedBooks = books.filter((book) => {
  //   //   if(book.id !== id){
  //   //     return book;
  //   //   }
  //   // });

  //   // setBooks(updatedBooks);
  // }

  // const editBooksById = async (id, newTitle) => {

  //   const response = await axios.put(`http://localhost:3001/books/${id}`, {
  //     title: newTitle
  //   });

  //   // console.log(response.data);

  //   const updatedBooks = books.map((book)=>{
  //     if(book.id === id){
  //       return {
  //         ...book,
  //         ...response.data
  //       };
  //     }
  //   });

  //   setBooks(updatedBooks);
    
  //   // const updatedBooks = books.map((book) => {
  //   //   if(book.id === id){
  //   //     return {
  //   //       ...book,
  //   //       title: newTitle
  //   //     };
  //   //   }
  //   //   return book;
  //   // });

  //   // setBooks(updatedBooks);
  // }

  return (<div className='app'>
    <h1>Reading List</h1>
    {/* <BookList 
      books={books}
      onDelete={deleteBookById}
      onEdit={editBooksById} />

    <BookCreate 
      onBookCreate={createBook} /> */}

    <BookList />

    <BookCreate />
    
    {/* <hr /> */}
    {/* <AddColor /> */}
  </div>);
}
export default App;