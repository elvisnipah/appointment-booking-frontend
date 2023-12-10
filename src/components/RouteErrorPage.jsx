import { Link } from "react-router-dom";
import { useRouteError, useLocation } from "react-router-dom";

const RouteErrorPage = () => {
  // const error = useRouteError();
  // console.error(error);
  let location = useLocation();
  return (
    <div className="page items-center justify-center gap-8 bg-gray-100">
      <h3 className="italic font-bold text-4xl">Oops...</h3>
      <p>An error occured.</p>
      <p className="italic text-gray-600 font-bold">
        {/* {error.statusText || error.message} */}
        {/* No route found for {location.pathname} */}
      </p>
      <Link to="/">
        <button className="px-4 py-2 bg-sky-400 rounded-lg font-bold text-gray-100 hover:bg-sky-700">
          Return to main page
        </button>
      </Link>
    </div>
  );
};

export default RouteErrorPage;
