import {useEffect, useState} from "react";

const useFetch = (URL) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return {fetchedData, loading};
};

export default useFetch;
