import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import BookContext from '../../context/BookContext';

const AddBook = (props) => {
  let navigation = useNavigate();
  const context = useContext(BookContext);
  const { addBookData } = context;

  const addBookFormInitialize = {
    title: '',
    author: '',
    language: '',
  };

  const [addBookForm, setBookForm] = useState(addBookFormInitialize);

  const onFieldChange = (e) => {
    e.preventDefault();
    setBookForm({ ...addBookForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: addBookForm.title,
      author: addBookForm.author,
      language: addBookForm.language,
    };
    await addBookData(payload);
    props.showAlert('Book added successfully !!!', 'success', 'Success');
    navigation('/');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='offset-md-3 col-md-6'>
          <h3 className='text-center'>Add Book</h3>
          <form onSubmit={handleSubmit}>
            <div className='field-form'>
              <div className='mb-4 row'>
                <label htmlFor='title' className='col-sm-2 col-form-label'>
                  Title
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    onChange={onFieldChange}
                    value={addBookForm.title}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='author' className='col-sm-2 col-form-label'>
                  Author
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='author'
                    name='author'
                    onChange={onFieldChange}
                    value={addBookForm.author}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='author' className='col-sm-2 col-form-label'>
                  Language
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='language'
                    name='language'
                    onChange={onFieldChange}
                    value={addBookForm.language}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
              <button
                type='button'
                className='btn btn-default mx-4'
                onClick={() => setBookForm({ ...addBookFormInitialize })}
              >
                Reset
              </button>
              <button
                type='button'
                className='btn btn-success mx-4'
                onClick={() => navigation('/')}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
