import React from "react";
import { useSelector } from "react-redux";
import VdoTitle from "./VdoTitle";
import VdoBg from "./VdoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[17];
  

  const {title, overview, id} = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VdoTitle title={title} overview={overview} />
      <VdoBg movieID={id} />
    </div>
  );
};

export default MainContainer;
