import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <div className="Header">
    <div className="logo">
      <img
        className="logoimg"
        src="https://wrapstore.in/wp-content/uploads/2023/07/wrapstorecompletelogo180.png"
      />
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

const CaseCards = (props) => (
  <div className="case-cards">
    {console.log(props)}
    <div className="caseImage">
      <img src={props.URL} />
      <h3>{props.name}</h3>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="case-container">
      <CaseCards name={SHSC} URL={SHSC_URL} />
      <CaseCards name={ARGC} URL={ARGC_URL} />
      <CaseCards name={LSC} URL={LSC_URL} />
      <CaseCards name={HHC} URL={HHC_URL} />
      <CaseCards name={LCC} URL={LCC_URL} />
      <CaseCards name={SAC} URL={SAC_URL} />
      <CaseCards name={ME} URL={ME_URL} />
      <CaseCards name={ANGC} URL={ANGC_URL} />
      <CaseCards name={ASC} URL={ASC_URL} />
      <CaseCards name={AHHC} URL={AHHC_URL} />
      <CaseCards name={ASAC} URL={ASAC_URL} />
      <CaseCards name={AC} URL={AC_URL} />
    </div>
  </div>
);

const AppLayout = () => (
  <div className="container">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);

const SHSC = "SUPERHERO HYBRID HARD CASE";
const SHSC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/09/SUP-HHC-CVR-768x480.webp";

const ARGC = "ARMOUR GLASS CASE";
const ARGC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/03/GN-GL-CVR-860X538.webp";

const LSC = "LAYERED SILICONE CASE";
const LSC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/01/SL-Cover-V2-768x480.webp";

const HHC = "HYBRID HARD CASE";
const HHC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/03/HY-CVR-768x480.webp";

const LCC = "LAYERED CLEAR CASE";
const LCC_URL =
  "https://wrapstore.in/wp-content/uploads/2024/07/CL-Cover-768x480.webp";

const SAC = "STRIDE AIR CASE";
const SAC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/03/ST-CVR-860X538.webp";

const ME = "MARVEL EDITION";
const ME_URL =
  "https://wrapstore.in/wp-content/uploads/2025/01/MRV-CoverV2-768x480.webp";

const ANGC = "ANIME GLASS CASE";
const ANGC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/03/AN-GL-CVR-768x480.webp";

const ASC = "ANIME SILICONE CASE";
const ASC_URL =
  "https://wrapstore.in/wp-content/uploads/2024/07/ASL-Cover-768x480.webp";

const AHHC = "ANIME HYBRID HARD CASE";
const AHHC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/03/AN-HY-CVR-768x480.webp";

const ASAC = "ANIME STRIDE AIR CASE";
const ASAC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/02/AN-STRIDE-Cover-768x480.webp";

const AC = "AIRPODS CASE";
const AC_URL =
  "https://wrapstore.in/wp-content/uploads/2025/01/ARP-Cover-V2-768x480.webp";
