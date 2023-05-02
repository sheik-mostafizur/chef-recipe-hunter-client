import React, {useEffect, useState} from "react";
import Chef from "./Chef";
import LoaderSpinner from "../../components/LoaderSpinner";

const ChefSection = () => {
  const [chefData, setChefData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const URL = "http://localhost:3000/chines-chef";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

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
