import { useState } from 'react';

function BookEdit ({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // onEdit(book.id,title);
    onSubmit(book.id, title);
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