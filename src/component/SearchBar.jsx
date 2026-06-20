import { useState } from "react";

const SearchBar = ({ search, setSearch }) => {

  return (

    <input

      type="text"

      placeholder="Search Jewellery..."

      value={search}

      onChange={(e) => setSearch(e.target.value)}

      className="
      w-full
      p-4
      rounded-full
      border
      border-gray-300
      outline-none
      "

    />

  );

};

export default SearchBar;