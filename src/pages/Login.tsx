import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user.email) {
      navigate(from, { replace: true });
    }
  }, [user.email, navigate, from]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("clicked", email, password);
    dispatch(loginUser({ email: email, password: password }));
    localStorage.setItem("email", user.email || "");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://i.ibb.co/n0N6PVN/bbc.png"
          alt="book catalog"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            create account here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
