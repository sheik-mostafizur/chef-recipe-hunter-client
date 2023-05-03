import React from "react";
import YearExperience from "../../assets/icons/chef-hat.png";
import NumbersRecipes from "../../assets/icons/recipe-book.png";
import Like from "../../assets/icons/heart.png";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({chefData}) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
  } = chefData;

  return (
    <div className="shadow rounded border border-primary px-6 py-8 space-y-5">
      <LazyLoad>
        <img
          className="w-48 h-48 mx-auto rounded-full outline outline-4 outline-primary"
          src={chef_picture}
          alt={chef_name}
        />
      </LazyLoad>
      <h3 className="font-bold text-2xl text-center">{chef_name}</h3>
      <div className="flex justify-between">
        <p>
          <img
            className="w-6 inline-block me-1"
            src={YearExperience}
            alt="Years of experience"
          />
          <b>{years_of_experience}</b> Years
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={NumbersRecipes}
            alt="Numbers of recipes"
          />
          <b>{num_of_recipes}</b> recipes
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={Like}
            alt="Numbers of Likes"
          />
          <b>{likes}</b> Likes
        </p>
      </div>
      <div>
        <Link to={`/chef-recipes/${id}`}>
          <button className="btn-primary w-full">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
