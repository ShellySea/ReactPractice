import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { status, statusText } = error; // just did destructuring
  return (
    <>
      <h2>Something went wrong!!</h2>
      <p>{error.status + ": " + error.statusText}</p>
      {/* if destructuring then use below*/}
      <p>{status + ": " + statusText}</p>
    </>
  );
};

export default Error;
