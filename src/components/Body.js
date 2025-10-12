import CaseCards from "./CaseCards";
import cardList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfCases, setListOfCases] = useState(cardList);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="home-btn"
          onClick={() => {
            setListOfCases(cardList);
          }}
        >
          Home
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfCases.filter((c) =>
              c.name.includes("ANIME")
            );
            setListOfCases(filteredList);
          }}
        >
          Anime
        </button>
        <div className="body_input-bar">
          <input
            type="text"
            className="body_input_txt"
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                if (e.target.value == "") {
                  return;
                }
                const searchInput = e.target.value.toLowerCase();
                const newSearchCards = cardList.filter((elem) =>
                  elem.name.toLowerCase().includes(searchInput)
                );
                e.target.value = "";
                setListOfCases(newSearchCards);
              }
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="Searchbtn"
            onClick={() => {
              const newSearchCard = cardList.filter((elem) =>
                elem.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfCases(newSearchCard);
              setSearchText("");
            }}
          >
            🔍
          </button>
        </div>
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
