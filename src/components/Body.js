import CaseCards from "./CaseCards";
import { cardList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdSearch } from "react-icons/md";

const Body = () => {
  const [listOfCases, setListOfCases] = useState(cardList);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline..</h1>;
  }

  return (
    <div className="body flex flex-col items-center">
      <div className="filter-container flex gap-7 px-8 mt-4 border border-gray-400 m-0 w-min py-2 ml-8">
        <div className="home-btn flex justify-center">
          <button
            className="h-btn "
            onClick={() => {
              setListOfCases(cardList);
            }}
          >
            Home
          </button>
        </div>
        <div className="filter-btn flex justify-center">
          <button
            className="f-btn "
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
