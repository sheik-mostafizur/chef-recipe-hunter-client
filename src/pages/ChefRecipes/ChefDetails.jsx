import React from "react";
import Banner from "./Banner";
import {useLoaderData} from "react-router-dom";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const chefRecipeData = useLoaderData();
  const {recipes} = chefRecipeData;
  return (
    <div>
      <Banner chefRecipeData={chefRecipeData} />

      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        {recipes &&
          recipes.map((recipeData) => (
            <Recipe key={recipeData.id} recipeData={recipeData} />
          ))}
      </div>
    </div>
  );
};

export default ChefDetails;
