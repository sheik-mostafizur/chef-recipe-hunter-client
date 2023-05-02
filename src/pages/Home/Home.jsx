import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Footer from "../../components/Footer";
import ChefSection from "./ChefSection";
import PopularRecipe from "./PopularRecipe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ChefSection />
      <PopularRecipe />
      <Footer />
    </div>
  );
};

export default Home;
