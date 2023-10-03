import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-20 text-white w-100 bg-slate-950">
      <div className="text-2xl font-bold">
        <Link to={"/"}>
          Movi<span className="text-yellow-500">e</span>
        </Link>
      </div>
      <ul className="flex">
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
    </div>
  );
};

export default Navbar;
