import React from "react";
import Header from "./Fundamental/Header";
import MainMovieContainer from "./Main Container/MainMovieContainer";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
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
