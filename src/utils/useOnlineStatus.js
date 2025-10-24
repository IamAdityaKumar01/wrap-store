import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  let [LineStatus, setLineStatus] = useState(true);

  useEffect(
    () =>
      window.addEventListener("online", () => {
        setLineStatus(true);
      }),

    window.addEventListener("offline", () => {
      setLineStatus(false);
    }),
    []
  );
  return LineStatus;
};

export default useOnlineStatus;
