import React from "react";
import YearExperience from "../../assets/icons/chef-hat.png";
import NumbersRecipes from "../../assets/icons/recipe-book.png";
import Like from "../../assets/icons/heart.png";

// eslint-disable-next-line react/prop-types
const Chef = ({chefData}) => {
  // eslint-disable-next-line react/prop-types
  const {chef_picture, chef_name, years_of_experience, num_of_recipes, likes} =
    chefData;

  return (
    <div className="shadow rounded border border-primary px-6 py-8 space-y-5">
      <img
        className="w-48 h-48 mx-auto rounded-full outline outline-4 outline-primary"
        src={chef_picture}
        alt={chef_name}
      />
      <h3 className="font-bold text-2xl text-center">{chef_name}</h3>
      <div className="flex justify-between">
        <p>
          <img
            className="w-6 inline-block me-1"
            src={YearExperience}
            alt="Years of experience"
          />
          <span>{years_of_experience}</span> Years
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={NumbersRecipes}
            alt="Numbers of recipes"
          />
          <span>{num_of_recipes}</span> recipes
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={Like}
            alt="Numbers of Likes"
          />
          <span>{likes}</span> Likes
        </p>
      </div>
      <button className="btn-primary w-full">View Recipes</button>
    </div>
  );
};

export default Chef;
