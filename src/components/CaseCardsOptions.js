import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useCasesOptions from "../utils/useCasesOptions";
import useOnlineStatus from "../utils/useOnlineStatus";
import CaseCardsOptionsAccordion from "./CaseCardsOptionsAccordion";
import { useState } from "react";

const CaseCardsOptions = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { refId } = useParams();
  const [caseInfo, caseAccordionInfo] = useCasesOptions(refId);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">
          Looks like you are offline..
        </h1>
      </div>
    );
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 mt-3">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-md">
                <img
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                  src={thumbnail}
                  alt={title}
                />
              </div>
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                {brand}
              </span>

              <div className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold text-sm tracking-wide shadow-md">
                SELECT MODEL INSIDE
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-gray-400 line-through">
                  ${actualPrice}
                </span>
                <span className="text-3xl font-bold text-emerald-600">
                  ${discountedPrice}
                </span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {discountP}% OFF
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
                {title}
              </h2>

              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {category}
              </p>

              <button
                type="button"
                className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6">
            <h3 className="text-xl font-bold text-center">Comments</h3>
          </div>

          <div className="p-4 md:p-6 space-y-3">
            {caseAccordionInfo.posts.map((elem, index) => (
              <CaseCardsOptionsAccordion
                key={elem.id}
                {...elem}
                showItems={index === showIndex}
                setIndex={() =>
                  setShowIndex(showIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCardsOptions;
