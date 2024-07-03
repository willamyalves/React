import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Ops!</h1>
      {error.status && <p>{error.status}</p>}
      <p>Temos um problema</p>
      {error.data && <p>{error.data}</p>}
    </div>
  );
};

export default ErrorPage;
