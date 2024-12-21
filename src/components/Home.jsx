/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './all/Hero'
import Product from './all/Product'
import Banner1 from './all/Banner1'
import AllProduct from './all/AllProduct'
import Bottombanner from './all/Bottombanner'
import { useState } from 'react'
import ProductDetails from './all/ProductDetails'

function Home() {


  return (
    <div>
        <Hero/>
        <div className="flex justify-center items-center py-4 px-4">
        <h1 className="text-[30px] font-bold ">
          Our <span className="text-[#91d5ff]">Product</span>
        </h1>
      </div>
      <Product/>
      <Banner1/>
      <div className="flex  items-center justify-center py-4">
        <h1 className="text-[30px] font-bold ">
          All Products
        </h1>
      </div>
      <AllProduct />
      <Bottombanner/>
    </div>
  )
}

export default Home