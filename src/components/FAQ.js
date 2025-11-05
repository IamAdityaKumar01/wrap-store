import { useEffect, useState } from "react";
import FAQAcc from "./FAQAcc";

const FAQ = () => {
  let [accData, setAccData] = useState(null);
  let [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let data = await fetch("https://dummyjson.com/posts?limit=5");
    let json = await data.json();

    setAccData(json);
    console.log(json);
  }

  if (accData == null) {
    return;
  }
  return (
    <div className="FAQ-Container">
      <div className="products">
        <div className="products-heading">
          <h3 className="title1">Products</h3>
          <div className="Accordion flex flex-col">
            {accData.posts.map((elem, index) => (
              <FAQAcc
                key={elem.id}
                {...elem}
                showData={index == showIndex}
                setIndex={() => setShowIndex(index == showIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
