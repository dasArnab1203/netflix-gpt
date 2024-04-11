import React from "react";
import SearchBar from "./SearchBar";
import MovieSugg from "./MovieSugg";
import { Bg_URL } from "../utilities/constants";

const Search = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={Bg_URL} alt="blogo" />
      </div>
      <div className="">
        <SearchBar />
        <MovieSugg />
      </div>
    </>
  );
};

export default Search;
