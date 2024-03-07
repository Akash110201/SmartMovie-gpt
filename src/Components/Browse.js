import React from "react";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
