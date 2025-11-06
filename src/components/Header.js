import { LOGO_IMG } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
const Header = () => {
  let [inputVal, setInputVal] = useState("");
  return (
    <div
      className="flex justify-between py-6 px-1 shadow-lg  [&_a:hover]:text-yellow-700 [&_button:hover]:text-green-700 
                transition-colors duration-300 w-12/12 select-none"
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
          <li>
            <FaShoppingCart className="text-black-700 w-5 h-5" />
          </li>
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
