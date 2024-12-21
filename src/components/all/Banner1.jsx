/* eslint-disable no-unused-vars */
import React from "react";
import bannerpic1 from "../../assets/img/Banner m2.jpg";
import bannerpic2 from "../../assets/img/banner m1.jpg";

function Banner1() {
  return (
    <div className="grid grid-cols-2 py-4 px-4 gap-4">
      <div className="">
        <img className="w-screen h-[416px] rounded-md" src={bannerpic1} alt="" />
      </div>
      <div className="">
        <img className="w-screen h-[416px] rounded-md " src={bannerpic2} alt="" />
      </div>
    </div>
  );
}

export default Banner1;
