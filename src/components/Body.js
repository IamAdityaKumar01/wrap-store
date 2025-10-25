import CaseCards from "./CaseCards";
import { cardList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdSearch } from "react-icons/md";

const Body = () => {
  const [listOfCases, setListOfCases] = useState(cardList);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline..</h1>;
  }

  return (
    <div className="body">
      <div className="filter-container flex gap-10 px-10 pt-6">
        <div className="home-btn flex justify-center">
          <button
            className="h-btn px-3 py-2 bg-green-200 rounded-xl cursor-pointer"
            onClick={() => {
              setListOfCases(cardList);
            }}
          >
            Home
          </button>
        </div>
        <div className="filter-btn flex justify-center">
          <button
            className="f-btn px-3 py-2 bg-green-200 rounded-xl cursor-pointer"
            onClick={() => {
              const filteredList = listOfCases.filter((c) =>
                c.name.includes("ANIME")
              );
              setListOfCases(filteredList);
            }}
          >
            Anime
          </button>
        </div>
        <div className="search-box flex justify-center border border-gray-300 bg-gray-50 py-0.1 ">
          <button
            className="s-btn pl-5 pr-3 cursor-pointer"
            onClick={() => {
              const newSearchCard = cardList.filter((elem) =>
                elem.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfCases(newSearchCard);
              setSearchText("");
            }}
          >
            <MdSearch size={22} className="text-gray-600" />
          </button>
          <input
            type="text"
            className="i-box py-2 w-150 outline-none"
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
                setListOfCases(newSearchCards);
                console.log(e.target.value);
                setSearchText("");
              }
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="case-container grid grid-cols-3 auto-rows-auto gap-4 px-10 pt-7">
        {listOfCases.map((obj) => (
          <Link key={obj.key} to={"/cases/" + obj.key}>
            <CaseCards name={obj.name} URL={obj.URL} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
