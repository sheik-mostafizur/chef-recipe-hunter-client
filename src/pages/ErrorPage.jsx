import React from "react";
import error404Image from "../assets/error404.png";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ErrorPage = () => {
  return (
    <div className="container mx-auto h-screen md:flex items-center justify-center">
      <div className="text-center my-8">
        <h1 className="font-bold text-3xl md:text-5xl mb-8 text-primary">
          404 Page not found!
        </h1>
        <Link
          to="/"
          className="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-primary">
          go home
        </Link>
      </div>
      <div>
        <LazyLoad>
          <img
            className="w-full max-w-3xl"
            src={error404Image}
            alt="error 404 page"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default ErrorPage;
