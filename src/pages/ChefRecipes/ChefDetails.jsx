import React from "react";
import Banner from "./Banner";
import {useLoaderData} from "react-router-dom";

const ChefDetails = () => {
  const chefRecipeData = useLoaderData();
  return (
    <div>
      <Banner chefRecipeData={chefRecipeData} />
    </div>
  );
};

export default ChefDetails;
