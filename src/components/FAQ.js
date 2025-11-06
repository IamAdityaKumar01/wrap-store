import { useEffect, useState } from "react";
import FAQAcc from "./FAQAcc";
import Shimmer from "./Shimmer";

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
  }

  if (accData == null) {
    return <Shimmer />;
  }
  return (
    <div className="FAQ-Container w-full  bg-gradient-to-b from-gray-50 to-gray-100 flex flex-wrap justify-center gap-8 p-6 md:p-10 select-none">
      <div className="products bg-white shadow-md rounded-2xl w-full md:w-[40%] lg:w-[30%] p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <div className="products-heading mb-4 text-center border-b border-gray-200 pb-2">
          <h3 className="title1 text-2xl font-semibold text-gray-800 tracking-wide">
            Products
          </h3>
          <div className="Accordion flex flex-col mt-4 space-y-5">
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
