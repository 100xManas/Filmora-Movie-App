import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="relative flex items-center justify-center my-3">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="border border-zinc-600 focus:border-[#6556CD] focus:outline-none focus:ring-0 duration-150 text-white rounded-tl-full rounded-bl-full p-2.5 pl-4 w-[33vw]"
          />

          {query.length > 0 && (
            <i
              onClick={() => setQuery("")}
              className="ri-close-line absolute right-2 text-3xl text-zinc-400 inline-block cursor-pointer hover:bg-zinc-700 rounded-md duration-150"
            ></i>
          )}
        </div>
        <i className="ri-search-line text-2xl text-zinc-400 cursor-pointer hover:bg-zinc-600 duration-150 bg-zinc-700 p-[7px] px-5 inline-block rounded-tr-full rounded-br-full"></i>
      </div>

      <div className="absolute max-h-[50vh] w-[35vw] top-full mt-2 rounded-md overflow-auto bg-zinc-700">
          <div className="p-4 text-white hover:bg-zinc-600 cursor-pointer">
            <i className="ri-history-line inline-block mx-2"></i>
            <span className="font-semibold">Hello Everyone</span>
          </div>
      </div>
    </div>
  );
}

export default SearchBar;
