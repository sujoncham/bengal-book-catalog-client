import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-5 flex justify-start gap-5">
      <div className="w-[15%] bg-gray-800 h-screen text-white">
        <ul className="px-2 py-1">
          <li className="border-2 border-purple-300 px-1">
            <Link to={"/dashboard/"}>Dashboard</Link>
          </li>
          <li className="border-2 border-purple-300 px-1">
            <Link to={"/dashboard/checkoutList/"}>Checkout List</Link>
          </li>
          <li className="border-2 border-purple-300 px-1">
            <Link to={"/"}>All Book List</Link>
          </li>
        </ul>
      </div>
      <div className="w-[85%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
