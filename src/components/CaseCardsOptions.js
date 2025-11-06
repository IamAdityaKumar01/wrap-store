import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useCasesOptions from "../utils/useCasesOptions";
import useOnlineStatus from "../utils/useOnlineStatus";
import CaseCardsOptionsAccordion from "./CaseCardsOptionsAccordion";
import { useState } from "react";
import Shimmer from "./Shimmer";

const CaseCardsOptions = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { refId } = useParams();
  const [caseInfo, caseAccordionInfo] = useCasesOptions(refId);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline..</h1>;
  }

  if (caseInfo === null || caseAccordionInfo == null) {
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
    <div className="store-container flex flex-col gap-7 justify-center items-center">
      <div className="case border border-gray-500 p-2 m-2 flex flex-col justify-center items-center gap-2 h-max">
        <img
          className="case-image border border-gray-100 w-full object-cover h-64"
          src={thumbnail}
        />
        <h2 className="brand-name bg-green-500 rounded-lg text-white px-2 font-bold">
          {brand}
        </h2>
        <h2 className="bg-gray-300 rounded-sm px-2 font-bold">
          SELECT MODEL INSIDE
        </h2>
        <h2 className="Price">
          <span className=" line-through font-medium text-emerald-400">
            ${actualPrice}
          </span>{" "}
          <span className="sale-price font-bold text-emerald-700">
            ${discountedPrice}
          </span>
        </h2>
        {<h2 className="case-name font-medium">{title} </h2>}
        {<h3 className="category text-gray-400">{category}</h3>}
      </div>

      <div className="AccordianCards flex flex-col items-center gap-4 w-6/12 mb-10 justify-center">
        <div className="w-full">
          {caseAccordionInfo.posts.map((elem, index) => (
            <CaseCardsOptionsAccordion
              key={elem.id}
              {...elem}
              showItems={index === showIndex}
              setIndex={() => setShowIndex(showIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseCardsOptions;
