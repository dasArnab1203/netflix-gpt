import React, { useRef } from "react";
import lang from "../utilities/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utilities/openAI";
import { API_OPTIONS } from "../utilities/constants";
import { addGptMovie } from "../utilities/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searctTxt = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };
  const handleSearchClick = async () => {
    //console.log(searctTxt.current.value);

    const GPT_query =
      "Act as a Movie Recommendation System and suggest some movies based on the query : " +
      searctTxt.current.value +
      " .Only give names of 5 movies, comma seperated like the example result given ahead. Example: Qala, Ludo, Drishyam, Kal ho na ho, Dear Zindagi";

    const GPT_res = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPT_query }],
      model: "gpt-3.5-turbo",
    });

    console.log(GPT_res.choices?.[0]?.message?.content.split(","));

    const GPT_Movies = GPT_res.choices?.[0]?.message?.content.split(",");

    const promiseArr = GPT_Movies.map((movie) => searchMovieTMDB(movie));

    const TMDBres = await Promise.all(promiseArr);

    dispatch(addGptMovie({movieNames: GPT_Movies, movieREsults: TMDBres}));
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 rounded-lg bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searctTxt}
          type="text"
          placeholder={lang[langkey].placeholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button
          className="py-1 px-2 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
