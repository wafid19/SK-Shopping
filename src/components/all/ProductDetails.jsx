/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const { productId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handelAddToCart = (cproduct) => {
    const cartProduct = [...cart, cproduct];
    setCart(cartProduct);
  };

  useEffect(() => {
    if (cart.length > 0) {
      const json = JSON.stringify(cart);
      localStorage.setItem("cart", json);
    }
  }, [cart]);

  const product = products.find((p) => p.id === productId);

  const discountedPrice = (
    product?.price -
    (product?.price * product?.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-black shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={product?.img}
            alt={product?.title}
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800">{product?.title}</h1>
          <p className="text-sm text-gray-600 mt-2">{product?.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-xl font-bold text-gray-800">
              ${discountedPrice}
            </span>
            <span className="text-sm line-through text-gray-500 ml-2">
              ${product?.price}
            </span>
            <span className="ml-2 text-green-600 text-sm">
              ({product?.discountPercentage}% off)
            </span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm text-gray-500">Brand:</span>
            <span className="text-sm text-gray-800 ml-2">{product?.brand}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm text-gray-800 ml-2">
              {product?.category}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500">Rating:</span>
            <span className="text-sm text-yellow-500 ml-2">
              {product?.rating} ★
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500">Stock:</span>
            <span className="text-sm text-gray-800 ml-2">
              {product?.stock} left
            </span>
          </div>
          <button onClick={() => handelAddToCart(product)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
