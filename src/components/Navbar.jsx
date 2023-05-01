import React, {useState} from "react";
import Logo from "../assets/logo.png";
import {Link, NavLink} from "react-router-dom";
import {uesAuthContext} from "../context/AuthContext";

const Navbar = () => {
  const {user, logOutUser} = uesAuthContext();
  const [toggleNav, setToggleNav] = useState(false);

  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => alert(error.message));
  };

  const navLinkStyle =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const navLinkStyleActive =
    "block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary";

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-12 mr-3" alt="Recipe Master Logo" />
          <span className="self-center text-2xl font-semibold text-primary whitespace-nowrap dark:text-white">
            RecipeMaster
          </span>
        </a>
        <div className="flex md:order-2">
          {user && (
            <img
              className="w-10 h-10 me-3 shadow rounded-full border border-primary p-[5px]"
              src={user?.photoURL}
              alt={user?.displayName}
              title={user?.displayName}
            />
          )}
          {user ? (
            <button onClick={handleLogout} className="btn-primary">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
          <button
            onClick={() => setToggleNav(!toggleNav)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            toggleNav ? "" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({isActive, isPending}) =>
                  isPending ? navLinkStyle : isActive ? navLinkStyleActive : ""
                }
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({isActive, isPending}) =>
                  isPending ? navLinkStyle : isActive ? navLinkStyleActive : ""
                }>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
