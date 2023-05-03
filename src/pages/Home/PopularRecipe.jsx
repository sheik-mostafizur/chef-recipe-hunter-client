import React from "react";
import LoaderSpinner from "../../components/LoaderSpinner";
import useFetch from "./useFetch";
import LazyLoad from "react-lazy-load";

const PopularRecipe = () => {
  const {fetchedData: recipeData, loading} = useFetch(
    "https://recipe-master-assignment.vercel.app/popular-chines-recipe"
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
      <h2 className="mb-12 font-bold text-4xl md:text-6xl text-center">
        Popular Chinese Recipe
      </h2>

      {/* if data is not loaded Spinner is running then show chef recipe data */}
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipeData &&
            recipeData.map(({id, image_url, name}) => (
              <div
                key={id}
                className="rounded-lg shadow p-4 border border-primary">
                <LazyLoad>
                  <img
                    className="mx-auto rounded-lg"
                    src={image_url}
                    alt={name}
                  />
                </LazyLoad>
                <h3 className="mt-3 font-bold text-2xl text-center">{name}</h3>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PopularRecipe;
