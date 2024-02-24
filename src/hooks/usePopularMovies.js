import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addpopularMovie } from "../utilities/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addpopularMovie(json.results));
  };

  useEffect(() => {
    getpopularMovies();
  }, []);
};

export default usePopularMovies;
