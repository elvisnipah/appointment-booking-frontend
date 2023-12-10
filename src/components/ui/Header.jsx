import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-2 bg-slate-600 text-white font-bold">
      <div className="flex gap-3">
        <p>bookMe</p>
      </div>
      <div className="flex gap-2">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/new">
          <p>schedule appointment</p>
        </Link>
        <Link to="/">
          <p>other</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
