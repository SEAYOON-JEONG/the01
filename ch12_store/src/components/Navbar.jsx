import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();
  const {itemCount} = useSelector( (state) => state.carts );


  // const initialState = {
  //   carts: [],           // 처음에는 빈 배열
  //   itemCount: 0,
  //   totalAmount: 0,
  // };



  return (

    <div className="flex justify-between items-center my-2 py-2">
      
       <div className="text-6xl mx-12 cursor-pointer" onClick={() => {navigate("/")}}>Shopzon</div>
       <div className="flex items-center gap-8 mx-12">

          <div className="flex items-center border p-3 rounded-full bg-gray-100">
            <input className="bg-gay-100 outline-none" type="text" placeholder="Search" />
            <BiSearch size={28} className="text-gray-500 hover:animate-pulse" />
          </div>
          <AiOutlineHeart size={28}></AiOutlineHeart>
          <div onClick={() => navigate("cart")} className="relative">
            <span className="absolute -top-3 -right-3 flex w-5 h-5 rounded-full bg-red-500 text-white items-center justify-center ">
              {itemCount}
            </span>
            <SlBasket size={28} className="cursor-pointer" />
          </div>
       </div>
    </div>

   
  )
}

export default Navbar;