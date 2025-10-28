const CaseCardsOptionsAccordion = (props) => {
  console.log(props);
  console.log(props.reactions.likes);
  return (
    <div className="AccordianCards w-6/12 bg-gray-200 flex flex-col backdrop:shadow-lg px-4 py-2 rounded-lg">
      <div className="header flex justify-between items-center w-full">
        <span className="title text-gray-800">{props.title}</span>{" "}
        <span>^</span>
      </div>
      <div className="body flex justify-center m-2 gap-2">
        <span>👍: {props.reactions.likes}</span>
        <span>👎: {props.reactions.dislikes}</span>
      </div>
    </div>
  );
};

export default CaseCardsOptionsAccordion;
