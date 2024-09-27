import React from 'react';
import Navbar from './components/Navbar';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import RecommendedItem from './components/RecommendedItem';
import Footer from './components/Footer';
import "./App.css"

const cartItems = [
  { name: 'Winter Jacket', description: 'black, Jeans', price: 1156, image: '/image/jac.jpeg' },
  { name: 'shirt', description: 'yellow, Medium', price: 44.80, image: '/image/shirt.jpeg' },
  { name: 'shirt', description: 'white, Medium', price: 44.80, image: '/image/shirt2.jpeg' },
];

const recommendedItems = [
  { name: 'Headset', price: 18.95, image: '/image/headset.jpeg' },
  { name: 'Apple Watch', price: 18.95, image: '/image/watch.jpeg' },
  { name: 'Denim Shorts', price: 18.95, image: '/image/short.jpeg' },
  { name: 'T-shirt', description: 'white, Medium', price: 44.80, image: '/image/tshirt.jpeg' },
];


function App() {

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Section */}
          <div className="col-span-2 border border-gray-300">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          
         
          {/* Summary Section */}
          <CartSummary total={1200} />
        </div>

        {/* Recommended Items */}
        <h2 className="text-xl font-bold mt-8">Recommended Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {recommendedItems.map((item, index) => (
            <RecommendedItem key={index} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
