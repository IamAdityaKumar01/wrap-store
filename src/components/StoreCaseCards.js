const StoreCases = (props) => {
  const { name, category, originalPrice, salePrice, emiPrice, URL } =
    props.props;

  return (
    <div className="store-cards w-90 pb-2 h-auto border border-gray-200 rounded-xl mb-2.5">
      <div>
        <img className="case-image w-80 h-auto" src={URL} />
      </div>
      <div className="case-details flex flex-col gap-0 justify-center items-center">
        <h2 className="emi-price bg-green-600 text-white rounded-lg px-1 py-0.1 text-sm font-bold">
          Get it as low as ${emiPrice}*
        </h2>
        <h2 className="text-sm font-bold my-4.5">SELECT MODEL INSIDE</h2>
        <h2 className="Price mb-2">
          $
          <span className="orignal-Price line-through font-medium text-emerald-400">
            {originalPrice}
          </span>{" "}
          $
          <span className="sale-price font-bold text-emerald-700">
            {salePrice}
          </span>
        </h2>
        <h2 className="case-name font-medium">{name}</h2>
        <h3 className="category text-gray-400">{category}</h3>
      </div>
    </div>
  );
};

export default StoreCases;
