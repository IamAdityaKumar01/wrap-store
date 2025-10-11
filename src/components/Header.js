import LOGO_IMG from "../utils/constant";

const Header = () => (
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
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
