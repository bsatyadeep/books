import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit ({book, onSubmit}) {
  const { editBooksById } = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // onEdit(book.id,title);
    // onSubmit(book.id, title);
    editBooksById(book.id, title);
    onSubmit();
  }

  return (<form 
    className='book-edit'
    onSubmit={handleOnSubmit}>
    <label>Title</label>
    <input
      placeholder='title'
      className='input'
      id="title"
      name="title"
      value={title}
      onChange={handleChange} />
    <button 
      className='button is-primary'>
      Save
    </button>
  </form>);
}
export default BookEdit;