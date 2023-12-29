import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          dress store
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/new">schedule</Link>
          </li>
          <li>
            <details>
              <summary>menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none z-50">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
