import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Register = () => {
  const error = "";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_url = form.photo_url.value;
  };

  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 h-screen flex items-center justify-center">
        <div className="shadow border p-8 rounded-lg w-[450px]">
          <h2 className="font-bold text-2xl">Register Your Account</h2>
          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              className="py-1 ps-2 pe-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
                className="w-8 h-8 inline-block"
              />
              Sign up with Google
            </button>
            <button
              type="button"
              className="py-2 ps-2 pe-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="google"
                className="w-6 h-6 inline-block me-2"
              />
              Sign up with GitHub
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your photo URL
              </label>
              <input
                type="text"
                name="photo_url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Enter your photo URL"
                required
              />
            </div>
            {error && <p className="mb-4 text-red-600">{error}</p>}
            <button
              type="submit"
              className="text-white mb-4 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
              Create an account
            </button>
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
