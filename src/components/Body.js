import CaseCards from "./caseCards";
import cardList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfCases, setListOfCases] = useState(cardList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfCases.filter((c) =>
              c.name.includes("ANIME")
            );
            setListOfCases(filteredList);
          }}
        >
          Anime stuff
        </button>
      </div>
      <div className="case-container">
        {listOfCases.map((obj) => (
          <CaseCards name={obj.name} URL={obj.URL} key={obj.key} />
        ))}
      </div>
    </div>
  );
};

export default Body;
