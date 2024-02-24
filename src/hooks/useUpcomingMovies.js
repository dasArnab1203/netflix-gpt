import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addupcomingMovie } from "../utilities/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getupcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addupcomingMovie(json.results));
  };

  useEffect(() => {
    getupcomingMovies();
  }, []);
};

export default useUpcomingMovies;
