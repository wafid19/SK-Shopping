/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";



function AddToCard() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const product = localStorage.getItem('cart');
    setCart(JSON.parse(product));
  }, []);

  console.log(cart);

  useEffect(() => {
    // Update total whenever cart changes
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
    // Save to localStorage
    // localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const updateQty = cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    );

    setCart(updateQty)

    localStorage.setItem('cart', JSON.stringify(updateQty));
  };

  const removeItem = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600">Start shopping to add items to your cart!</p>
          </div>
        </div>
      </div>
    );
  }





  

  return (
      <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
          
          <div className="space-y-4">
            {cart.map((p) => (
              <div 
                key={p.id} 
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={p.img || "/api/placeholder/80/80"} 
                    alt={p.title} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-gray-600">${p.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(p.id, p.quantity - 1)}
                      className="px-3 py-1 border-r hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{p.quantity}</span>
                    <button
                      onClick={() => updateQuantity(p.id, p.quantity + 1)}
                      className="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(p.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                onClick={() => {/* Add checkout logic */}}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCard