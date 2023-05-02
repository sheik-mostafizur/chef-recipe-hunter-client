import React from "react";
import Chef from "../../assets/chef.png";

const Banner = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Cooking Never Got Any <span className="text-primary">Easier</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              If you really want to “learn” how to cook, the best way is to go
              to culinary school, take courses, find an instructor that’s
              willing to give you some lessons, converse with experienced chefs,
              and try to understand why different parts of the world have their
              own cuisine.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 mb-3 md:mb-0 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary">
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary hover:text-white border border-primary rounded-lg hover:bg-primary focus:ring-4 focus:ring-primary dark:text-white dark:border-primary dark:hover:bg-primary dark:focus:ring-primary">
              Get my Cook Book
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="max-h-[700px]" src={Chef} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
