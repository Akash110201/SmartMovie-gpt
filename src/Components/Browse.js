import Header from "./Fundamental/Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainMovieContainer from "./Main Container/MainMovieContainer";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GPT/GptSearch";
import { useSelector } from "react-redux";
import useTopTvSeries from "../Hooks/useTopTvSeries";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopTvSeries();

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
