import React from 'react';
import BookList from './books/BookList';
const Home = (props) => {
  return (
    <div>
      <BookList showAlert={props.showAlert} />
    </div>
  );
};

export default Home;
