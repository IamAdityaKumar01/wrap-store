const StoreCases = (props) => {
  console.log(props.props);
  const { name, category, originalPrice, salePrice, emiPrice, URL } =
    props.props;
  return (
    <div className="store-cards">
      <div className="case">
        <img className="case-image" src={URL} />
        <h2 className="emi-price">get it as low as ${emiPrice}</h2>
        <h2>SELECT MODEL INSIDE</h2>
        <h2 className="Price">
          $<span className="orignal-Price">{originalPrice}</span> ${salePrice}
        </h2>
        <h2 className="case-name">{name}</h2>
        <h3 className="category">{category}</h3>
      </div>
    </div>
  );
};

export default StoreCases;
