import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Outlet} from "react-router-dom";

const ChefRecipes = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ChefRecipes;