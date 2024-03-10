<<<<<<< HEAD
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
=======
import React from "react";
import Header from "./Fundamental/Header";
import MainMovieContainer from "./Main Container/MainMovieContainer";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
>>>>>>> 87c3f440b7d9451b1fa908fac663c9bdea04d232
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GPT/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainMovieContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;