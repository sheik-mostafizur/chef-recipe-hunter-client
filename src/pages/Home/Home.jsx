import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Footer from "../../components/Footer";
import ChefSection from "./ChefSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ChefSection />
      <Footer />
    </div>
  );
};

export default Home;
