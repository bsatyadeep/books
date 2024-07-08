import { useState } from 'react';
import BookEdit from './book-edit';

function BookShow ({book, onDelete, onEdit}) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = (e) => {
    e.preventDefault();
    onDelete(book.id);
  }

  const handleEditClick = (e) => {
    setShowEdit(!showEdit);
  }

  const handleOnSubmit = (id, newTitle) => {
    setShowEdit(!showEdit);
    onEdit(id, newTitle);
  }

  let content = <h3>
    {book.title}
  </h3>;

  if(showEdit){
    content = <BookEdit 
      book={book}
      // onEdit={onEdit}
      onSubmit={handleOnSubmit} />
  }

  return (<div 
    className='book-show'
    key={book.id}>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>
        {content}
      </div>

      <div className="actions">
        <button className='edit'
          onClick={handleEditClick}>
          Edit
        </button>

        <button 
          className="delete" 
          onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
  </div>);
}
export default BookShow;