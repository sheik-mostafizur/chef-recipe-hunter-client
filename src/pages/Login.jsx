import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Login = () => {
  const error = "";
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 h-screen flex items-center justify-center">
        <div className="shadow border p-8 rounded-lg w-[450px]">
          <h2 className="font-bold text-2xl">Log In Your Account</h2>
          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              className="py-1 ps-2 pe-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
                className="w-8 h-8 inline-block"
              />
              Sign in with Google
            </button>
            <button
              type="button"
              className="py-2 ps-2 pe-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="google"
                className="w-6 h-6 inline-block me-2"
              />
              Sign in with GitHub
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="********"
                required
              />
            </div>
            {error && <p className="mb-4 text-red-600">{error}</p>}
            <button type="submit" className="btn-primary w-full mb-4">
              Login
            </button>
            <p>
              Don{`'`}t have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-bold hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
