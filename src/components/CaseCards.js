const CaseCards = (props) => {
  const { name, URL } = props;

  console.log("caseCards Called");
  return (
    <div
      className="case-cards m-2 px-2 w-115 h-max border border-gray-300 rounded-xl pb-2 transition-transform duration-300 ease-in-out 
             hover:-translate-y-1"
    >
      <div className="caseImage">
        <img src={URL} />
        <div className="case-name flex items-center justify-center">
          <span className="case-txt font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default CaseCards;
