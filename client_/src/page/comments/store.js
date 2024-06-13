import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signinServer } from '../../redux/auth/login';
import { storeCommentServer } from '../../redux/comments/store';
import { Link } from 'react-router-dom';

const Store = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });

  const dispatch = useDispatch();
  // const { status, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(storeCommentServer(formData));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
      <Link to="/products" className="btn btn-success btn-sm">list product</Link>
        <h2 className="text-center mb-4">insert comment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">comment</label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            >
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">insert</button>
        </form>
        {/* {status === 'loading' && <p>Loading...</p>} */}
        {/* {status === 'failed' && <p className="text-danger">Error: {error}</p>} */}
      </div>
    </div>
  );
};

export default Store;