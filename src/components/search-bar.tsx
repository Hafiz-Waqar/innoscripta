import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbListSearch } from "react-icons/tb";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-4 w-56 sm:w-80 lg:w-full lg:max-w-96 rounded-lg bg-[#1c1f26] px-2 lg:px-3 h-10 focus-within:ring-1 focus-within:ring-[#525866] focus-within:ring-opacity-60 group transition-all">
      <TbListSearch className="size-6 flex-shrink-0 text-[#a8b3cf]" />
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent border-none placeholder:text-[#a8b3cf] text-xs md:text-sm lg:text-base text-white focus:outline-none"
      />
      <IoIosArrowRoundForward
        onClick={handleSearch}
        className="text-[#a8b3cf] flex-shrink-0 size-8 cursor-pointer flex"
      />
    </div>
  );
};
