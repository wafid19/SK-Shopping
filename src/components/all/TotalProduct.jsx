/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";

function TotalProduct() {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([])
    const productsPerPage = 8;

      useEffect(() => {
        axios
          .get("http://localhost:3000/products")
          .then((resp) => {
            setProducts(resp.data);
            console.log(products);
            
          })
          .catch(() => {
            console.error("Error fetching products:", error);
          });
      }, []);

      const handelAddToCart = (cproduct) => {
        // Retrieve cart from localStorage
        const storedCart = localStorage.getItem('cart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      
        // Check if the product already exists in the cart
        const existingProductIndex = parsedCart.findIndex(item => item.id === cproduct.id);
      
        if (existingProductIndex >= 0) {
          // If the product exists, update its quantity
          parsedCart[existingProductIndex].quantity += 1;
        } else {
          // If it's a new product, add it with an initial quantity
          parsedCart.push({ ...cproduct, quantity: 1 });
        }
      
        // Update cart state and localStorage
        setCart(parsedCart);
        localStorage.setItem('cart', JSON.stringify(parsedCart));
      };
      
        useEffect(() => {
          if (cart.length > 0) {
            const json = JSON.stringify(cart);
            localStorage.setItem('cart', json);
          }
        }, [cart]);
  
    // Calculate pagination values
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    // Handle page navigation
    const handlePreviousPage = () => {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };
  
    return (
      <div className="max-w-6xl mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {currentProducts.map(p => (
            <div key={p.id}>
             
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Link to={"/product/details/" + p.id}>
                <img
                  alt="example"
                  className="h-[300px] shadow-lg w-full"
                  key={p.id}
                  src={p.img}
                />
                </Link>
              }
              onClick={() => onSelectProduct(p)}
            >
              <div className="flex justify-center ">
                <h3 className="text-md font-semibold">{p.brand}</h3>
              </div>
              <div className="flex justify-center ">
                <h3 className="text-md font-semibold">Price:${p.price}</h3>
              </div>
              <div className="flex justify-between ">
                  <button onClick={()=>handelAddToCart(p)} className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f6f8f8] border border-red-100">
                    <FaCartShopping />
                  </button>
                <Link to={"/product/details/" + p.id}>
                <button className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f0f4f3] border border-red-100">
                  <FcViewDetails />
                </button>
                </Link>
              </div>
            </Card>
        </div>
          ))}
        </div>
  
        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(indexOfLastProduct, products.length)}
                </span>{' '}
                of <span className="font-medium">{products.length}</span> products
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md p-2 text-gray-400 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-md p-2 text-gray-400 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default TotalProduct