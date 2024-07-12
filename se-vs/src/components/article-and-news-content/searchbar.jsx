import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex w-full justify-center md:w-[86.7%] lg:max-w-[1130px]">
      <div
        className={`mx-[1.25rem] flex w-full rounded-md bg-brand-gray p-4 shadow-lg transition-all lg:p-4 ${isFocused ? "w-full" : "w-3/4"}`}
      >
        <FaSearch className="absolute cursor-pointer text-base text-neutral-600 md:text-lg lg:text-2xl" />
        <input
          type="text"
          placeholder="Search here"
          className="border-none bg-neutral-300 bg-transparent pl-10 text-xs outline-none md:text-base lg:text-xl "
          onChange={handleSearch}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
