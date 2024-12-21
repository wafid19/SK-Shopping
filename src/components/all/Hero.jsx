/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";
// import food1 from "../../assets/img/food1";
// import food2 from "../../assets/img/food2.avif";
// import food3 from "../../assets/img/food3.avif";
import img1 from "../../assets/img/PB3.jpg";
import img2 from "../../assets/img/pB2.avif";
import img3 from "../../assets/img/PB.jpg";
import img4 from "../../assets/img/banner-1.jpg";
import img5 from "../../assets/img/banner2-img.jpg"

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Hero() {
  return (
    <div className="px-4">
      <div className=" flex justify-center items-center z-10">
        <h1 className="text-[50px] font-bold">
        Good food for <span className="text-[#91d5ff]">all of us</span>
        </h1>
      </div>
      <div>
      <Carousel autoplay infinite>
        <div>
          <img className="w-full h-[500px]" src={img4} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px]" src={img2} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px]" src={img3} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px]" src={img1} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px]" src={img5} alt="" />
        </div>
      </Carousel>
      </div>
    </div>
  );
}

export default Hero;
