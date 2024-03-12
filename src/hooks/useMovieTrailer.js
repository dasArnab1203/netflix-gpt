import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTrailerVdo } from "../utilities/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {


    const dispatch = useDispatch();
    //const [trailerID, settrailerID] = useState(null);

    const trailerVdo = useSelector((store) => store.movie.trailerVdo);
   
     const getMovieVdos = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
         API_OPTIONS
       );
   
       const json = await data.json();
   
       const filterVdo = json.results.filter(
         (video) => video.name == "Official Trailer"
       );
       const trailer = filterVdo.length ? filterVdo[0] : json.results[0];
       
       dispatch(addTrailerVdo(trailer));
       //settrailerID(trailer.key);
       
     };
   
     useEffect(() => {
       !trailerVdo && getMovieVdos();
     }, []);
}

export default useMovieTrailer;