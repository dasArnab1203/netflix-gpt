import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addtrendingMovie } from "../utilities/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const gettrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addtrendingMovie(json.results));
  };

  useEffect(() => {
    gettrendingMovies();
  }, []);
};

export default useTrendingMovies;
