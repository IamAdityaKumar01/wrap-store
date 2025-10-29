import { useState } from "react";

const CaseCardsOptionsAccordion = (props) => {
  let { showItems } = props;

  function handleClick() {
    props.setIndex();
  }

  return (
    <div className="AccordianCards w-full bg-gray-100 flex flex-col shadow-xl px-4 py-2 rounded-lg mb-4">
      <div
        onClick={handleClick}
        className="header flex justify-between w-full cursor-pointer select-none"
      >
        <span className="title text-gray-800">{props.title}</span>{" "}
        <span>{showItems ? "🔽" : "🔼"}</span>
      </div>
      {showItems && (
        <div className="body flex justify-center m-2 gap-2">
          <span>👍: {props.reactions.likes}</span>
          <span>👎: {props.reactions.dislikes}</span>
        </div>
      )}
    </div>
  );
};

export default CaseCardsOptionsAccordion;
