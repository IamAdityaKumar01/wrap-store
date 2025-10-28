import { useState, useEffect } from "react";
import { CasesOptionsApi } from "./constant";

const useCasesOptions = (refId) => {
  const [caseInfo, setCaseInfo] = useState(null);
  const [caseAccordionInfo, setCaseAccordionInfo] = useState(null);
  useEffect(() => {
    fetchCards();
    fetchAccordianData();
  }, [refId]);
  const fetchCards = async () => {
    const data = await fetch(CasesOptionsApi + refId);

    const json = await data.json();
    setCaseInfo(json);
  };

  const fetchAccordianData = async () => {
    const data = await fetch("https://dummyjson.com/posts?limit=5");
    const json = await data.json();
    setCaseAccordionInfo(json);
  };
  return [caseInfo, caseAccordionInfo];
};

export default useCasesOptions;
