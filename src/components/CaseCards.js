const CaseCards = (props) => {
  const { name, URL } = props;

  return (
    <div className="case-cards m-2 px-2 w-115 h-max border border-gray-300 rounded-xl">
      <div className="caseImage">
        <img src={URL} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CaseCards;
