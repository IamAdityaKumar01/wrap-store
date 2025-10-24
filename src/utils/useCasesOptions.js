import { useState, useEffect } from "react";
import { CasesOptionsApi } from "./constant";

const useCasesOptions = (refId) => {
  const [caseInfo, setCaseInfo] = useState(null);
  useEffect(() => {
    fetchCards();
  }, []);
  const fetchCards = async () => {
    const data = await fetch(CasesOptionsApi + refId);

    const json = await data.json();
    setCaseInfo(json);
  };

  return caseInfo;
};

export default useCasesOptions;
