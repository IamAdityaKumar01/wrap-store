const CaseCards = (props) => {
  const { name, URL } = props;

  return (
    <div className="case-cards">
      <div className="caseImage">
        <img src={URL} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CaseCards;
