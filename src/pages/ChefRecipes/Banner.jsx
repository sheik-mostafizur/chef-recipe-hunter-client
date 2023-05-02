import React from "react";
import YearExperience from "../../assets/icons/chef-hat.png";
import NumbersRecipes from "../../assets/icons/recipe-book.png";
import Like from "../../assets/icons/heart.png";

const Banner = ({chefRecipeData}) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    description,
  } = chefRecipeData;

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="grid justify-center space-y-9 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {chef_name}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between text-2xl">
            <p>
              <img
                className="w-8 inline-block me-1"
                src={YearExperience}
                alt="Years of experience"
              />
              <b>{years_of_experience}</b> Years
            </p>
            <p>
              <img
                className="w-7 inline-block me-1"
                src={NumbersRecipes}
                alt="Numbers of recipes"
              />
              <b>{num_of_recipes}</b> recipes
            </p>
            <p>
              <img
                className="w-7 inline-block me-1"
                src={Like}
                alt="Numbers of Likes"
              />
              <b>{likes}</b> Likes
            </p>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="mx-auto max-h-[700px]"
            src={chef_picture}
            alt={chef_name}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
