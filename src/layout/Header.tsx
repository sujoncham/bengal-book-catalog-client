import { signOut } from "firebase/auth";
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import auth from "../utils/firebase.init";
const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    console.log("logout");
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-green-800 py-3">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between sm:justify-center lg:items-center md:items-center sm:items-center items-center gap-3">
        <div>
          <Link to={"/"}>Bengal Book Catalog</Link>
        </div>
        <div className="text-white">
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
              <Link to={"/products"}>All Books</Link>
            </li>
            <li>
              <Link to={"/checkout"}>Checkout</Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <ul className="flex justify-start items-center gap-3">
            <li>
              <Link to={"/login"}>
                <FaHeart size={20} />
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <FaShoppingCart size={20} />
              </Link>
            </li>
            {!user.email ? (
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            ) : (
              <li className="relative bg-gray-900 rounded-md">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex justify-start items-center px-2 hover:bg-green-500 rounded-md cursor-pointer"
                >
                  <img
                    src=""
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-green-800 mr-2"
                  />
                  <p>Shakil Ahmed</p>
                </div>
                {!open && (
                  <div className="flex flex-col h-auto absolute top-12 z-20 bg-gray-900 w-full py-2 rounded-md">
                    <Link to={"/products"} className="mt-2 bg-gray-500 px-2">
                      Profile
                    </Link>
                    <Link to={"/products"} className="mt-2 bg-gray-500 px-2">
                      Setting
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="mt-2 bg-gray-500 px-2"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
