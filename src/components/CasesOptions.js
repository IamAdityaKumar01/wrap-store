import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import CaseOptionsCards from "./CaseOptionsCards";

const CaseOptions = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [caseInfo, setCaseInfo] = useState(null);

  const fetchCards = async () => {
    const data = await fetch("https://dummyjson.com/products/search?q=phone");

    const json = await data.json();

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
    <div className="store-container">
      {caseInfo.products.map((elem) => (
        <CaseOptionsCards key={elem.id} props={elem} />
      ))}
    </div>
  );
};

export default CaseOptions;
