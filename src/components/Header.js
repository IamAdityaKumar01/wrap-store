import LOGO_IMG from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("sign in");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
  return (
    <div className="Header">
      <div className="logo">
        <img className="logoimg" src={LOGO_IMG} />

        <div className="input-bar">
          <input
            type="text"
            className="input_txt"
            placeholder="Search for products..."
          ></input>
        </div>

        <div className="navBar">
          <ul>
            <li>store</li>
            <li>categories</li>
            <li>FAQ's</li>
            <li>My Account</li>
            <li>Terms of Use</li>
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
