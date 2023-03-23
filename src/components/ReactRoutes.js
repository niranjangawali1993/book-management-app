import React from 'react';
import { Route, Routes } from 'react-router';
import AddBook from './books/AddBook';
import Home from './Home';

const ReactRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home showAlert={props.showAlert} />} />
        <Route path='add' element={<AddBook showAlert={props.showAlert} />} />
      </Routes>
    </div>
  );
};

export default ReactRoutes;
