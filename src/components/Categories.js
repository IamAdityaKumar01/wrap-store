import { useState, useEffect } from "react";
import CategoriesCards from "./CategoriesCards";

const Categories = () => {
  let [phoneList, setPhoneList] = useState(null);
  useEffect(() => {
    getPhoneData();
  }, []);
  async function getPhoneData() {
    const data = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const json = await data.json();

    setPhoneList(json.products);
  }

  if (phoneList == null) {
    return <h1>loading..</h1>;
  }

  return (
    <div className="store-container grid grid-cols-4 auto-rows-auto m-2 p-2 gap-0">
      {phoneList.map((elem) => (
        <CategoriesCards key={elem.id} props={elem} />
      ))}
    </div>
  );
};
export default Categories;
