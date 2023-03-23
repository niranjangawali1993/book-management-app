import http from '../http-common';

const getBooks = (pageNo) => {
  return http.get(`/book?pageNo=${pageNo}`);
};

const getBookById = (id) => {
  return http.get(`/book/${id}`);
};

const addBook = (payload) => {
  return http.post('/book', payload);
};

const updateBook = (payload, id) => {
  return http.put(`/book/${id}`, payload);
};

const deleteBook = (id) => {
  return http.delete(`/book/${id}`);
};

const BookService = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};

export default BookService;
