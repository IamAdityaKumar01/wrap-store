const CategoriesCards = ({ props }) => {
  const { title, rating, price, discountPercentage, thumbnail, brand } = props;
  const actualPrice = price;
  const discountP = discountPercentage;

  const discountedPrice = Math.round(
    actualPrice - actualPrice * (discountP / 100)
  );

  return (
    <div className="cat-cases w-90 h-auto border border-gray-200 rounded-xl mb-0 p-2">
      <img className="case-image w-80 h-80" src={thumbnail} />
      <div className="case-content flex flex-col gap-0.5 justify-center items-center">
        <h2 className="brand-name rounded-lg px-1 py-0.1 text-sm font-medium">
          {brand}
        </h2>
        <h2 className="text-sm font-bold my-4.5">SELECT MODEL INSIDE</h2>
        <h2 className="Price mb-2">
          $
          <span className="orignal-Price line-through font-medium text-emerald-400">
            {actualPrice}
          </span>{" "}
          $
          <span className="sale-price font-bold text-emerald-700">
            {discountedPrice}
          </span>
        </h2>
        {<h2 className="case-name font-medium">{title} </h2>}
        {<h3 className="rating text-gray-800">rating: {rating}/5</h3>}
      </div>
    </div>
  );
};

export const WithBestRating = (CategoriesCards) => {
  return (prop) => {
    return (
      <div>
        <label className="absolute bg-red-400 text-white rounded-lg px-1 ml-1 mt-1">
          Best Rated
        </label>
        <CategoriesCards {...prop} />
      </div>
    );
  };
};

export default CategoriesCards;
