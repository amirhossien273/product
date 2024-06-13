import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { productService } from '../../redux/products/list';
import { Link } from 'react-router-dom';


const ListProduct = () => {

  const { product } = useSelector((state) => state);

  // console.log(product.data.data[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productService());
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <Link to="/comments/store" className="btn btn-success btn-sm">add comment</Link>
         <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">total comment</th>
            </tr>
          </thead>
          <tbody>
          {product.data.data?.map( (value, index) => {
            return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.total_comments}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default ListProduct;