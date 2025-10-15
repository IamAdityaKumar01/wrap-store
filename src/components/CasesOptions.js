import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CasesOptionsApi } from "../utils/constant";

const CasesOptions = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const { refId } = useParams();

  const [caseInfo, setCaseInfo] = useState(null);

  const fetchCards = async () => {
    const data = await fetch(CasesOptionsApi + refId);

    const json = await data.json();
    console.log(json);
    setCaseInfo(json);
  };
  if (caseInfo === null) {
    return <Shimmer />;
  }
  const { title, category, price, discountPercentage, thumbnail, brand } =
    caseInfo;
  console.log(title);

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
