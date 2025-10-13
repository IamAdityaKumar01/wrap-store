import LOGO_IMG from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("sign in");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">
          <img className="logoimg" src={LOGO_IMG} />
        </Link>

        <div className="input-bar">
          <input
            type="text"
            className="input_txt"
            placeholder="Search for products..."
          ></input>
        </div>

        <div className="navBar">
          <ul>
            <li>
              <Link to="/store">store</Link>
            </li>
            <li>categories</li>
            <li>FAQ's</li>
            <li>My Account</li>
            <li>
              <Link to="/termsofUse">Terms of Use</Link>
            </li>
            <li>MyCart</li>
            <li></li>
            <button
              className="sign-btn"
              onClick={() =>
                btnName == "sign out"
                  ? setBtnName("sign in")
                  : setBtnName("sign out")
              }
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
