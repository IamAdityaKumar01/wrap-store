const CaseCards = (props) => {
  const { name, URL } = props;
  console.log(name);
  console.log(URL);
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
