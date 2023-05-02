import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import Like from "../../assets/icons/heart.png";
import LikeDisabled from "../../assets/icons/heart-disabled.png";

const Recipe = ({recipeData}) => {
  const {recipeName, recipe_image, ingredients, cookingMethod, rating} =
    recipeData;

  const [isFavorite, setIsFavorite] = useState(false);
  const notify = () => toast.success("Recipe Favorite added!");

  const handleFavorite = () => {
    setIsFavorite(true);
    notify();
  };

  return (
    <div className="shadow px-4 py-8 my-6 bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
        <img className="w-96" src={recipe_image} alt={recipeName} />
        <h3 className="font-bold text-2xl my-4">{recipeName}</h3>
        <Toaster />
        <button onClick={handleFavorite} disabled={isFavorite ? true : ""}>
          <img
            className="rounded-full w-16 absolute -top-4 -left-2 hover:outline outline-4 outline-white"
            src={isFavorite ? Like : LikeDisabled}
            alt="Do you like it?"
            title="Favorite"
          />
        </button>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {ingredients &&
                ingredients.map(({name, amount}) => (
                  <tr
                    key={
                      name.toLowerCase().split(" ").join("_") + Math.random()
                    }
                    className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {name}
                    </th>
                    <td className="px-3 py-2">{amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:col-span-2 lg:col-span-1">
        <p>{cookingMethod}</p>
        <p className="mt-4">
          <b>Ratings: </b>
          {rating}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
