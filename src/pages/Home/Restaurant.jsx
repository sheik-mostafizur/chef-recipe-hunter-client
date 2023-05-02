import React, {useState} from "react";

const Restaurant = ({restaurantsData}) => {
  const {id, image_url, name, must_try, location, description} =
    restaurantsData;
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);
  return (
    <div key={id} className="rounded-lg shadow p-4 border border-primary">
      <img className="mx-auto rounded-lg" src={image_url} alt={name} />
      <h3 className="mt-3 font-bold text-2xl">{name}</h3>
      <p>
        <b>Must Try: </b>
        {must_try}
      </p>
      <p>
        <b>Location: </b>
        {location}
      </p>
      <p>
        <b>Description: </b>
        {showMore ? (
          <>
            {description}
            <span
              onClick={handleShowMore}
              className="cursor-pointer font-bold hover:underline">
              {" "}
              less
            </span>
          </>
        ) : (
          <>
            {description.slice(0, 50)}
            <span
              onClick={handleShowMore}
              className="cursor-pointer font-bold hover:underline">
              {" "}
              more
            </span>
            ...
          </>
        )}
      </p>
    </div>
  );
};

export default Restaurant;
