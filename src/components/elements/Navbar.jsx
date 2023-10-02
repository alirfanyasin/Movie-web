import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-20 text-white w-100 bg-slate-950">
      <div className="text-2xl font-bold">Movie</div>
      <ul className="flex">
        <li className="ml-10">
          <a href="">Home</a>
        </li>
        <li className="ml-10">
          <a href="">About</a>
        </li>
        <li className="ml-10">
          <a href="">New Movie</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
