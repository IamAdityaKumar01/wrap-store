import { LOGO_IMG } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let data = useContext(UserContext);
  let { setVal, setInputVal } = data;
  const cart = useSelector((store) => store.cart.items);

  return (
    <div
      className="sticky top-0 z-50 bg-white flex justify-between py-6 px-1 shadow-lg [&_a:hover]:text-yellow-700 [&_button:hover]:text-green-700 
            transition-colors duration-300 w-full select-none"
    >
      <div className="flex items-center w-33">
        <Link to="/">
          <img className="logoimg" src={LOGO_IMG} />
        </Link>
      </div>

      <div className="search-box flex border border-gray-300 bg-gray-50 py-0.1 w-4/12">
        <button className="s-btn pl-5 pr-3 cursor-pointer">
          <MdSearch size={22} className="text-gray-600" />
        </button>
        <input
          type="text"
          className="i-box py-2 flex-grow outline-none bg-gray-50 h-11"
          placeholder="Search"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        ></input>
      </div>

      <div className="flex items-center">
        <ul className="flex gap-x-10">
          <li className="">
            <Link to="/store">store</Link>
          </li>
          <Link to="/categories">
            <li>categories</li>
          </Link>
          <Link to="/FAQ">
            <li>FAQ's</li>
          </Link>
          <li>My Account</li>
          <li>
            <Link to="/termsofUse">Terms of Use</Link>
          </li>
          <Link to="/cart">
            <li className="relative flex items-center justify-center">
              <div className="cart">
                <FaShoppingCart className="cart-logo text-black-700 w-6 h-6" />
                <div className="bg-green-400 items-count absolute -top-6 -right-6 rounded-full m-2">
                  <span className="w-1 h-1 p-2 rounded-full text-white">
                    {cart.length}
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <li>
            <div className="mr-9 ml-5">
              <Link to="/login">
                <button className="transition-all duration-300 ease-in-out min-w-[80px]">
                  Login
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
