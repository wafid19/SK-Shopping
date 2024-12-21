/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import oil from "../../assets/img/Mustard-Oil-2-scaled.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product() {
  const { Meta } = Card;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch(() => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1014 },
      items: 4,
    },
    tablet2: {
      breakpoint: { max: 1014, min: 765 },
      items: 3,
    },
    mobile1: {
      breakpoint: { max: 740, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-4 py-4">
      <Carousel responsive={responsive} autoPlay infinite>
        {products.map((p) => (
          <div key={p.id}>
            <Link to={"/product/details/" + p.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    className="h-[300px]"
                    key={p.id}
                    src={p.img}
                  />
                }
              >
                <div className="flex justify-center ">
                  <h2 className="text-md font-semibold">{p.brand}</h2>
                </div>
                <div className="flex justify-center ">
                  <h3 className="text-md font-semibold">Price:${p.price}</h3>
                </div>
                <div className="flex justify-between ">
                  <button className="w-[150px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-white border border-red-100">
                    <FaCartShopping />
                  </button>
                  <button className="w-[150px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-white border border-red-100">
                    <FaHeart />
                  </button>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Product;
