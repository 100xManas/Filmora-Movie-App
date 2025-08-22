import React from "react";
import Sidebar from "../partials/Sidebar";
import SearchBar from "../partials/SearchBar";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="w-[85vw] h-full ">
        <SearchBar />
      </div>
    </>
  );
}

export default Home;
