const CaseOptionsCards = (props) => {
  const { title, category, thumbnail, discountPercentage, price, brand } =
    props.props;

  const actualPrice = price;
  const discountP = discountPercentage;
  const discountedPrice = Math.round(
    actualPrice - actualPrice * (discountP / 100)
  );
  return (
    <div className="case">
      <img className="case-image" src={thumbnail} />
      <h2 className="emi-price">{brand}</h2>
      <h2>SELECT MODEL INSIDE</h2>
      <h2 className="Price">
        $<span className="orignal-Price">{actualPrice}</span> ${discountedPrice}
      </h2>
      <h2 className="case-name">{title} </h2>
      <h3 className="category">{category}</h3>
    </div>
  );
};
export default CaseOptionsCards;
