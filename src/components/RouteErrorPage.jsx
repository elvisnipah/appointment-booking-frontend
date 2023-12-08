import { Link } from "react-router-dom";

const RouteErrorPage = () => {
  return (
    <div className="flex flex-col min-h-full flex-grow items-center justify-center gap-8">
      <h3 className="italic font-bold text-3xl">Oops...</h3>
      <p>An error occured.</p>
      <p>This page could not be found :(</p>
      <Link to="/">
        <button className="px-4 py-2 bg-sky-400 rounded-lg font-bold text-gray-50 hover:bg-sky-700">
          Return to main page
        </button>
      </Link>
    </div>
  );
};

export default RouteErrorPage;
