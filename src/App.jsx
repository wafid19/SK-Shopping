/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import "./App.css";
import AllProduct from "./components/all/AllProduct";
import Home from "./components/Home";
import Footer from "./components/reuseable/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopSection from "./components/reuseable/TopSection";
import ProductDetails from "./components/all/ProductDetails";
import AddToCard from "./components/all/AddToCard";
import TotalProduct from "./components/all/TotalProduct";

function App() {

  const [selectedProduct, setSelectedProduct] = useState();
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><TopSection/><Home/></> 
    },
    {
      path:"/product",
      element:<><TopSection/><TotalProduct/></> 
    },

    {
      path:"/product/details/:productId",
      element:<><TopSection /><ProductDetails /></>
    },
    {
      path:"/product/card/",
      element:<><TopSection /><AddToCard/></>
    }

  ])
  return (
    <>
      
       <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
