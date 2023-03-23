import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import BookContext from '../../context/BookContext';
import EditBook from './EditBook';

const BookDetails = (props) => {
  const { bookDetails } = props;
  const context = useContext(BookContext);
  const { deleteBookData } = context;

  const deleteBook = (id) => {
    deleteBookData(id);
    props.showAlert('Book deleted successfully !!!', 'success', 'Success');
  };

  return (
    <div className='col-md-4 card-placement'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>{bookDetails.title}</h4>
          <p className='card-text'>Author: {bookDetails.author}</p>
          <p className='card-text'>Language: {bookDetails.language}</p>

          <div>
            <BsFillTrashFill
              id='rightSide'
              onClick={() => {
                if (window.confirm('Are you sure want to delete ?')) {
                  deleteBook(bookDetails.id);
                }
              }}
            />
            <div id='leftSide'>
              <EditBook bookDetails={bookDetails} showAlert={props.showAlert} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
