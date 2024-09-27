import React from 'react';

function RecommendedItem({ item }) {
  return (
    <div className="bg-white p-4 shadow-lg flex flex-col items-center border  border-gray-300">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2" />
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500">${item.price}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2">Add to Cart</button>
    </div>
  );
}

export default RecommendedItem;
