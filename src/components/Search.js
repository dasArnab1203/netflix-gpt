import React from "react";
import SearchBar from "./SearchBar";
import MovieSugg from "./MovieSugg";
import { Bg_URL } from "../utilities/constants";

const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={Bg_URL}
          alt="blogo"
        />
      </div>
      <SearchBar />
      <MovieSugg />
    </div>
  );
};

export default Search;
