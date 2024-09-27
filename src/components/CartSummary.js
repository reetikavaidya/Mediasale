import React from 'react';

function CartSummary({ total }) {
    const [coupon, setCoupon] = React.useState('');

    const handleCouponChange = (e) => {
      setCoupon(e.target.value);
    };
  
    const handleApplyCoupon = () => {
      // Logic to apply the coupon can be added here
      console.log(`Applying coupon: ${coupon}`);
    };
  
  return (
    <div >
        {/* Coupon Section */}
        <div className="mb-4 flex flex-col items-center bg-white p-2 border border-gray-300">
            <div className="flex items-center space-x-2 ">
                <span className='textcoupon'>
                    Have coupon?
                </span>
                
              <input 
                type="text" 
                value={coupon} 
                onChange={handleCouponChange} 
                placeholder="Coupon code" 
                className="border border-gray-300 rounded p-1 w-32 text-center text-sm"
              />
              <button 
                onClick={handleApplyCoupon} 
                className="bg-blue-500 text-white rounded p-1 text-sm"
              >
                Apply
              </button>
            </div>
          </div>
         <div className="bg-white p-4 shadow-lg border border-gray-300">
      <h2 className="text-lg font-semibold">Summary</h2>
      <div className="flex justify-between mt-2">
        <span>Total Price</span>
        <span>${total}</span>
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white w-full py-2">Make Purchase</button>
      </div>
    </div>
    </div>
  );
}

export default CartSummary;
