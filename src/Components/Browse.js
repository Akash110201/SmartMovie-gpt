import React from "react";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopTvSeries from "../Hooks/useTopTvSeries";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopTvSeries();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
