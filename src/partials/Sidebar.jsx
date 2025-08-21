import React from "react";

function Sidebar() {
  return (
    <div className="w-[20vw] h-full border-r border-zinc-400">
      <h1 className="text-center ">
        <i className="ri-tv-fill text-[#6556CD] text-2xl"></i>
        <span className="text-white uppercase inline-block mx-2 my-3 font-bold text-xl tracking-wide">
          Filmora
        </span>
      </h1>

      <nav>
        <h4 className="text-xl text-white capitalize mx-5 mt-5  tracking-tight">
          New feeds
        </h4>

        <div className="mx-7">
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-fire-fill mx-1 inline-block"></i>
            <a href="">trending</a>
          </div>
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-sparkling-2-fill mx-1 inline-block"></i>
            <a href="">Popular</a>
          </div>
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-movie-2-ai-fill mx-1 inline-block"></i>
            <a href="">Movies</a>
          </div>
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-tv-2-fill mx-1 inline-block"></i>
            <a href="">TV Shows</a>
          </div>
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-team-fill mx-1 inline-block"></i>
            <a href="">peoples</a>
          </div>
        </div>
      </nav>
      <hr className="border-none h-[1px] w-[85%] mx-auto bg-zinc-400" />
      <nav className="mt-8">
        <h4 className="text-xl text-white capitalize mx-5 mt-5  tracking-tight">
          website Information
        </h4>

        <div className="mx-7">
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-information-fill mx-1 inline-block"></i>
            <a href="">about</a>
          </div>
          <div className="text-white capitalize py-3 my-2 rounded-lg hover:bg-[#6556CD] duration-300 hover:text-white cursor-pointer ">
            <i className="ri-phone-fill mx-1 inline-block"></i>
            <a href="">contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
