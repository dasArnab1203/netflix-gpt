import React from "react";
import { IMG_CDN_URL } from "../utilities/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className="w-32 pr-2">
      <img className="rounded-md" alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  );
};

export default MovieCard;
