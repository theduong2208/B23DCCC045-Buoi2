import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/actions';
import '../App.css'; 

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="product-list-container">
      <h2>Danh Sách Hàng Hóa</h2>
      <Link to="/add">Thêm Hàng Hóa</Link>
      {products.length === 0 ? (
        <p>Không có hàng hóa nào</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} VND
              <Link className="edit-button" to={`/edit/${product.id}`}>Sửa</Link>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
