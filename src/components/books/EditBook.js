import React, { useContext, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import BookContext from '../../context/BookContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditBook = (props) => {
  const { bookDetails } = props;
  const context = useContext(BookContext);
  const { updateBookData } = context;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editBookFormInitialize = {
    title: bookDetails.title,
    author: bookDetails.author,
    language: bookDetails.language,
  };

  const [editBookForm, setEditBookForm] = useState(editBookFormInitialize);

  const onFieldChange = (e) => {
    e.preventDefault();
    setEditBookForm({ ...editBookForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: editBookForm.title,
      author: editBookForm.author,
      language: editBookForm.language,
    };
    updateBookData(payload, bookDetails.id);
    props.showAlert('Book Edited successfully !!!', 'success', 'Success');
    handleClose();
  };

  return (
    <>
      <AiFillEdit onClick={() => handleShow()} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    value={editBookForm.title}
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
                    value={editBookForm.author}
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
                    value={editBookForm.language}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditBook;
