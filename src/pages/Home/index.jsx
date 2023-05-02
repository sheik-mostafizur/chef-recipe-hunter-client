import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Footer from "../../components/Footer";
import ChefSection from "./ChefSection";
import PopularRecipe from "./PopularRecipe";
import PopularRestaurants from "./PopularRestaurants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ChefSection />
      <PopularRecipe />
      <PopularRestaurants/>
      <Footer />
    </div>
  );
};

export default Home;
