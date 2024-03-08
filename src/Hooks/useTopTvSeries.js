import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_TVSERIES_API } from "../Utils/constants";
import { addTopTvSeries } from "../Utils/movieSlice";

const useTopTvSeries = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topTvSeries = useSelector((store) => store.movies.topTvSeries);

  const getTopTvSeries = async () => {
    const data = await fetch(TOP_TVSERIES_API, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addTopTvSeries(json.results));
  };

  useEffect(() => {
    !topTvSeries && getTopTvSeries();
  }, []);
};

export default useTopTvSeries;
