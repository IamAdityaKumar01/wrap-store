import { categoryCardList } from "../utils/mockData";
import StoreCases from "./StoreCaseCards";
import { useState } from "react";

const Store = () => {
  let [listOfCaseCards, setlistOfCaseCards] = useState(categoryCardList);

  return (
    <div className="store-container">
      {listOfCaseCards.map((obj) => (
        <StoreCases key={obj.key} props={obj} />
      ))}
    </div>
  );
};

export default Store;
