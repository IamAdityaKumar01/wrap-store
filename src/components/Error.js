import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="Error">
      <div>
        <h1>
          {err.status} : {err.statusText}
        </h1>
      </div>
    </div>
  );
};

export default Error;
