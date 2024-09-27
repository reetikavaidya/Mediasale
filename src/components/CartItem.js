import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false); // Track wishlist state

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Toggle wishlist
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
 
    <div className="flex justify-between items-center p-4  bg-white p-5">
      {/* Product Image and Details */}
      <div className="flex space-x-4 items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center">
        <div className="input-group">
          <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
          <input type="text" className="form-control text-center w-12" value={quantity} readOnly />
          <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
        </div>
      </div>

      {/* Product Price */}
      <div className="text-end">
        <p className="font-bold">${(item.price * quantity).toFixed(2)}</p>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} per item</p>
      </div>

      {/* Wishlist Icon and Remove Button */}
      <div className="flex space-x-4 items-center">
        {/* Wishlist Heart Icon */}
        <button className="btn btn-outline-secondary" onClick={toggleWishlist}>
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`transition-colors duration-300 ${isWishlisted ? 'text-red-500' : 'text-white'}`} 
          />
        </button>

        {/* Remove Button */}
        <button className="btn btn-outline-danger">Remove</button>
      </div>
    </div>
  
  );
}

export default CartItem;
