import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import BookContext from './../../context/BookContext';
import BookDetails from './BookDetails';

const BookList = (props) => {
  const [pageNo, setPageNo] = useState(1);

  const context = useContext(BookContext);
  const { bookData, getBookData, setSpinnerStatus } = context;
  const navigate = useNavigate();

  useEffect(() => {
    setSpinnerStatus(true);
    async function getDataFun() {
      await getBookData(pageNo);
      setTimeout(() => {
        setSpinnerStatus(false);
      }, 1000);
    }
    getDataFun();
  }, [pageNo]);

  return (
    <div className='container'>
      <h2 className='app-title'>Book Management App</h2>
      <button
        className='btn btn-primary add-book-button'
        type='button'
        onClick={() => navigate('/add')}
      >
        Add Book
      </button>
      <div className='row'>
        {bookData.map((singleBook) => {
          return (
            <BookDetails
              key={singleBook.id}
              bookDetails={singleBook}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
      <button
        className='btn btn-success mb-4 mt-4'
        onClick={() => setPageNo(pageNo + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default BookList;
