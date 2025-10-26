import { LOGO_IMG } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("sign in");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

  return (
    <div
      className="flex justify-between py-6 px-1 shadow-lg  [&_a:hover]:text-yellow-700 [&_button:hover]:text-green-700 
                transition-colors duration-300"
    >
      <div className="flex items-center w-33">
        <Link to="/">
          <img className="logoimg" src={LOGO_IMG} />
        </Link>
      </div>

      {/* <div className="search-bar">
        <input
          type="text"
          className="p-4 w-150 border border-b-rose-600"
          placeholder="Search for products..."
        ></input>
      </div> */}

      <div className="flex items-center">
        <ul className="flex gap-x-10">
          <li className="">
            <Link to="/store">store</Link>
          </li>
          <Link to="/categories">
            <li>categories</li>
          </Link>
          <li>FAQ's</li>
          <li>My Account</li>
          <li>
            <Link to="/termsofUse">Terms of Use</Link>
          </li>
          <li>
            <FaShoppingCart className="text-black-700 w-5 h-5" />
          </li>
          <li>
            <div className="mr-9 ml-5">
              <button
                className="transition-all duration-300 ease-in-out min-w-[80px]"
                onClick={() =>
                  btnName == "sign out"
                    ? setBtnName("sign in")
                    : setBtnName("sign out")
                }
              >
                {btnName}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
