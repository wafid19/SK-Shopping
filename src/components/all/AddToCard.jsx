/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function AddToCard() {

  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  let CartProducts = [];
  useEffect(() => {
    axios
      .get("http://localhost:3030/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const CartProduct = [];

  const product = products.find((p) => {
    
  });
  console.log(product);


  return (
    <div>AddToCard</div>
  )
}

export default AddToCard