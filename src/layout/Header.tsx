import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-green-800 py-5">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between sm:justify-center lg:items-center md:items-center sm:items-center items-center gap-3">
        <div>
          <h1>Bengal Book Catalog</h1>
        </div>
        <div>
          <ul className="flex justify-start items-center gap-3">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
