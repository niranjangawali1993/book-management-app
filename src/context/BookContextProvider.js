import React, { useState } from 'react';
import BookService from './../service/BookService';
import BookContext from './BookContext';

const BookContextProvider = (props) => {
  const [bookData, setBookData] = useState([]);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  const getBookData = async (pageNo) => {
    const response = await BookService.getBooks(pageNo);
    const bookResponse = response.data.data;
    if (pageNo === 1) setBookData(bookResponse);
    else setBookData([...bookData, ...bookResponse]);
  };

  const addBookData = async (payload) => {
    const response = await BookService.addBook(payload);
    const result = response.data.data;
    return result;
  };

  const deleteBookData = async (id) => {
    const response = await BookService.deleteBook(id);
    const result = await response.data;
    if (result.status) {
      setBookData([...bookData.filter((e) => e.id !== id)]);
    }
  };

  const updateBookData = async (payload, id) => {
    const response = await BookService.updateBook(payload, id);
    const result = response.data;
    if (result.status) {
      const updatedBookList = bookData.map((e) =>
        e.id === id ? (e = { ...payload, id }) : e
      );
      setBookData(updatedBookList);
    }
  };

  return (
    <BookContext.Provider
      value={{
        bookData,
        getBookData,
        addBookData,
        deleteBookData,
        updateBookData,
        spinnerStatus,
        setSpinnerStatus,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
