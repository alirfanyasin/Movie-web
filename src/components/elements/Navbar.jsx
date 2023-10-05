import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState("hidden");

  const handleToggle = () => {
    if (toggle === "hidden") {
      setToggle("block");
    } else {
      setToggle("hidden");
    }

    console.log(toggle);
  };

  return (
    <div className="text-white ">
      <div className="flex items-center justify-between h-16 bg-slate-950 w-100 md:px-20 min-[360px]:px-8 ">
        <div className="text-2xl font-bold">
          <Link to={"/"}>
            Movi<span className="text-yellow-500">e</span>
          </Link>
        </div>
        <ul className="hidden md:flex">
          <li className="ml-10">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="ml-10">
            <Link to={"detail/movie"}>Trending</Link>
          </li>
          <li className="ml-10">
            <a href="">TV Series</a>
          </li>
        </ul>

        <button className="text-white md:hidden" onClick={() => handleToggle()}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className={`text-center bg-white text-slate-900 ${toggle}`}>
        <li className="py-2 hover:bg-slate-950 hover:text-white">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="py-2 hover:bg-slate-950 hover:text-white">
          <Link to={"detail/movie"}>Trending</Link>
        </li>
        <li className="py-2 hover:bg-slate-950 hover:text-white">
          <Link to="">TV Series</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
