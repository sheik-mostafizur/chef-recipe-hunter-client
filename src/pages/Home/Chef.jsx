import React from "react";
import YearExperience from "../../assets/icons/chef-hat.png";
import NumbersRecipes from "../../assets/icons/recipe-book.png";
import Like from "../../assets/icons/heart.png";

// -   Years of experience

// -   Numbers of recipes

// -   Likes

// -   View Recipes Button

const Chef = () => {
  return (
    <div className="shadow rounded border border-primary px-6 py-8 space-y-5">
      <img
        className="w-48 mx-auto rounded-full outline outline-4 outline-primary"
        src="https://asiantv4u.com/wp-content/uploads/2021/10/chinese-chef-1.jpg.webp"
        alt=""
      />
      <h3 className="font-bold text-2xl text-center">Martin Yan</h3>
      <div className="flex justify-between">
        <p>
          <img
            className="w-6 inline-block me-1"
            src={YearExperience}
            alt="Years of experience"
          />
          <span>4</span> Years
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={NumbersRecipes}
            alt="Numbers of recipes"
          />
          <span>15</span> recipes
        </p>
        <p>
          <img
            className="w-5 inline-block me-1"
            src={Like}
            alt="Numbers of Likes"
          />
          <span>15</span> Likes
        </p>
      </div>
      <button className="btn-primary w-full">View Recipes</button>
    </div>
  );
};

export default Chef;
