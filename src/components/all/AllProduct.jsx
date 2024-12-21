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
import { FcViewDetails } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
function AllProduct({ onSelectProduct = () => {} }) {
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

  // console.log(products);

  const { Meta } = Card;

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
    <div className="px-4 py-2">
      <Carousel responsive={responsive} autoPlay infinite className="py-4">
        {products.map((p) => (
          <div key={p.id}>
            <Link to={"/product/details/" + p.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    className="h-[300px] shadow-lg"
                    key={p.id}
                    src={p.img}
                  />
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
                  <Link to={"/product/card/"+ p.id}>
                    <button className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f6f8f8] border border-red-100">
                      <FaCartShopping />
                    </button>
                  </Link>
                  <Link to={"/product/details/" + p.id}>
                  <button className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f0f4f3] border border-red-100">
                    <FcViewDetails />
                  </button>
                  </Link>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
      <Carousel responsive={responsive} autoPlay infinite className="py-4">
        {products.map((p) => (
          <div key={p.id}>
            <Link to={"/product/details/" + p.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    className="h-[300px] shadow-lg"
                    key={p.id}
                    src={p.img}
                  />
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
                  <Link to={"/product/card/"+ p.id}>
                    <button className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f6f8f8] border border-red-100">
                      <FaCartShopping />
                    </button>
                  </Link>
                  <Link to={"/product/details/" + p.id}>
                  <button className="w-[87px] h-10 m-1 flex justify-center items-center rounded-full bg-[#03045e] text-[#f0f4f3] border border-red-100">
                    <FcViewDetails />
                  </button>
                  </Link>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AllProduct;
