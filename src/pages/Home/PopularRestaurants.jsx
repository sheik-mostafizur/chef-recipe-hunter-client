import React from "react";
import useFetch from "./useFetch";
import LoaderSpinner from "../../components/LoaderSpinner";
import Restaurant from "./Restaurant";

const PopularRestaurants = () => {
  const {fetchedData: restaurantsData, loading} = useFetch(
    "https://recipe-master-assignment.vercel.app/popular-chines-restaurants"
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
      <h2 className="mb-12 font-bold text-4xl md:text-6xl text-center">
        Popular Chinese Restaurants
      </h2>

      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantsData &&
            restaurantsData.map((data) => (
              <Restaurant key={data.id} restaurantsData={data} />
            ))}
        </div>
      )}
    </div>
  );
};

export default PopularRestaurants;
