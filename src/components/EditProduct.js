import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editProduct } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'; 

const EditProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [id, products]);

  const handleEditProduct = () => {
    const updatedProduct = { id: parseInt(id), name, price };
    dispatch(editProduct(updatedProduct));
    navigate('/');
  };

  return (
    <div>
      <h2>Sửa Hàng Hóa</h2>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Giá hàng hóa"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleEditProduct}>Lưu</button>
      <button onClick={() => navigate('/')}>Quay Lại</button>
    </div>
  );
};

export default EditProduct;
