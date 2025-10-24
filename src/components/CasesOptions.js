import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useCasesOptions from "../utils/useCasesOptions";

const CasesOptions = () => {
  const { refId } = useParams();
  let caseInfo = useCasesOptions(refId);
  if (caseInfo === null) {
    return <Shimmer />;
  }
  const { title, category, price, discountPercentage, thumbnail, brand } =
    caseInfo;

  const actualPrice = price;
  const discountP = discountPercentage;

  const discountedPrice = Math.round(
    actualPrice - actualPrice * (discountP / 100)
  );

  return (
    <div className="store-container">
      <div className="case">
        <img className="case-image" src={thumbnail} />
        <h2 className="emi-price">{brand}</h2>
        <h2>SELECT MODEL INSIDE</h2>
        <h2 className="Price">
          $<span className="orignal-Price">{actualPrice}</span> $
          {discountedPrice}
        </h2>
        {<h2 className="case-name">{title} </h2>}
        {<h3 className="category">{category}</h3>}
      </div>
    </div>
  );
};

export default CasesOptions;
