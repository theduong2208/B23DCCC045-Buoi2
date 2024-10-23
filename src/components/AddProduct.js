import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 


const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name,
      price,
    };
    dispatch(addProduct(newProduct));
    navigate('/');
  };

  return (
    <div>
      <h2>Thêm Hàng Hóa</h2>
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
      <button onClick={handleAddProduct}>Thêm</button>
      <button onClick={() => navigate('/')}>Quay Lại</button>
    </div>
  );
};

export default AddProduct;
