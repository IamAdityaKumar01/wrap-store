import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Categories = () => {
  let [phoneList, setPhoneList] = useState(null);
  useEffect(() => {
    getPhoneData();
  }, []);

  async function getPhoneData() {
    const data = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <h1>Hi</h1>
    // <div className="store-cards">
    //   <div className="case">
    //     {/* <img className="case-image" src={} />
    //     <h2 className="emi-price">get it as low as ${emiPrice}</h2>
    //     <h2>SELECT MODEL INSIDE</h2>
    //     <h2 className="Price">
    //       $<span className="orignal-Price">{originalPrice}</span> ${salePrice}
    //     </h2>
    //     <h2 className="case-name">{name}</h2>
    //     <h3 className="category">{category}</h3>
    //   </div> */}
    // </div>
  );
};

export default Categories;
