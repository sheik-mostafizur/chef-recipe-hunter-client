import React from "react";
import Chef from "./Chef";
import LoaderSpinner from "../../components/LoaderSpinner";
import useFetch from "./useFetch";

const ChefSection = () => {
  const {fetchedData: chefData, loading} = useFetch(
    "http://localhost:3000/chines-chef"
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
      <h2 className="mb-12 font-bold text-4xl md:text-6xl text-center">
        Top Chines Chef
      </h2>

      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefData &&
            chefData.map((data) => <Chef key={data.id} chefData={data} />)}
        </div>
      )}
    </div>
  );
};

export default ChefSection;
