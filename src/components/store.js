import { categoryCardList } from "../utils/mockData";
import StoreCaseCards from "./StoreCaseCards.js";
import { useState } from "react";

const Store = () => {
  let [listOfCaseCards, setlistOfCaseCards] = useState(categoryCardList);

  return (
    <div className="store-container">
      {listOfCaseCards.map((obj) => (
        <StoreCaseCards key={obj.key} props={obj} />
      ))}
    </div>
  );
};

export default Store;
