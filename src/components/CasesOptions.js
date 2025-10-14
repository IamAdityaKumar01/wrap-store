import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const CaseOptions = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [caseInfo, setCaseInfo] = useState(null);

  const fetchCards = async () => {
    const data = await fetch("https://dummyjson.com/products/search?q=phone");

    const json = await data.json();
    console.log(json.products[0]);
    setCaseInfo(json);
  };
  if (caseInfo === null) {
    return <Shimmer />;
  }

  const actualPrice = caseInfo.products[0].price;
  const discountPercentage = caseInfo.products[0].discountPercentage;

  const discountedPrice = Math.round(
    actualPrice - actualPrice * (discountPercentage / 100)
  );

  return (
    <div className="store-cards">
      <div className="case">
        <img className="case-image" src={caseInfo.products[0].images} />
        <h2 className="emi-price">{caseInfo.products[0].brand}</h2>
        <h2>SELECT MODEL INSIDE</h2>
        <h2 className="Price">
          $<span className="orignal-Price">{actualPrice}</span> $
          {discountedPrice}
        </h2>
        <h2 className="case-name">{caseInfo.products[0].title} </h2>
        <h3 className="category">{caseInfo.products[0].category}</h3>
      </div>
    </div>
  );
};

export default CaseOptions;
