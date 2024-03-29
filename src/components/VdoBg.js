import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";


const VdoBg = ({movieID}) => {

 const trailerVdo = useSelector((store) => store.movie?.trailerVdo);
 useMovieTrailer(movieID);


  return (
    <div className="w-screen ">
      <iframe className="w-screen aspect-video bg-gradient-to-b from-black"
        src={"https://www.youtube.com/embed/"+trailerVdo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

      ></iframe>
      
    </div>
  );
};

export default VdoBg;
