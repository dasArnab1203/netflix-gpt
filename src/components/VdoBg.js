import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utilities/constants";
//import { useDispatch, useSelector } from "react-redux";


const VdoBg = (movieID) => {

 //const trailerVideo = useSelector(store => store.movies?.trailerVdo)
 //const dispatch = useDispatch();
 const [trailerID, settrailerID] = useState(null);

  const getMovieVdos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/787699/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    const filterVdo = json.results.filter(
      (video) => video.name == "Official Trailer"
    );
    const trailer = filterVdo.length ? filterVdo[0] : json.results[0];
    console.log(trailer);
    //dispatch(addTrailerVdo(trailer));
    settrailerID(trailer.key);
  };

  useEffect(() => {
    getMovieVdos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerID}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

      ></iframe>
    </div>
  );
};

export default VdoBg;
