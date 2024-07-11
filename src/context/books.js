import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();
function Provider({children}){

  // const [count, setCount] = useState(0);
  // const valueToShare = {
  //   count,
  //   incrementCount: () => {
  //     setCount(count+1);
  //   }
  // }

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    // const updatedBooks = [
    //   ...books,
    //   response.data
    // ];

    setBooks(response.data);
  }

  const stableFetchBooks = useCallback(
    fetchBooks,
    []);

    const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [
      ...books,
      response.data
    ];

    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      if(book.id !== id){
        return book;
      }
    });

    setBooks(updatedBooks);
  }

  const editBooksById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });

    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        return {
          ...book,
          ...response.data
        };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  const valueToShare = {
    books: books,
    deleteBookById: deleteBookById,
    editBooksById: editBooksById,
    fetchBooks: fetchBooks,
    createBook: createBook,
    stableFetchBooks: stableFetchBooks
  };

  return <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>
}

export { Provider };
export default BooksContext;