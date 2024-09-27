import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-lg">Listmedia</div>
      <div className="flex space-x-4">
      <nav>
  <button className="hover:text-gray-200">Sign in</button>
  <button className="hover:text-gray-200">Wishlist</button>
  <button className="hover:text-gray-200">My Cart</button>
</nav>

      </div>
    </nav>
  );
}

export default Navbar;
