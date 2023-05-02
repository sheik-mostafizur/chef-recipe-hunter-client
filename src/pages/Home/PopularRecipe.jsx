import React, {useEffect, useState} from "react";
import LoaderSpinner from "../../components/LoaderSpinner";

const PopularRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const URL = "http://localhost:3000/popular-chines-recipe";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
      <h2 className="mb-12 font-bold text-4xl md:text-6xl text-center">
        Popular Chinese Recipe
      </h2>

      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipeData &&
            recipeData.map(({id, image_url, name}) => (
              <div
                key={id}
                className="rounded-lg shadow p-4 border border-primary">
                <img
                  className="mx-auto rounded-lg"
                  src={image_url}
                  alt={name}
                />
                <h3 className="mt-3 font-bold text-2xl text-center">{name}</h3>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PopularRecipe;
