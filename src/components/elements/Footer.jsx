import React from "react";

const Footer = () => {
  return (
    <div className="px-20 py-10 bg-slate-800">
      <div className="flex justify-between mt-5 ">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Movi<span className="text-yellow-500">e</span>{" "}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            culpa.
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <ul className="mt-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">New Movie</a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-semibold">Social Media</h3>
          <ul className="mt-4">
            <li className="font-light">
              <a href="">Youtube</a>
            </li>
            <li className="font-light">
              <a href="">Instagram</a>
            </li>
            <li className="font-light">
              <a href="">Tiktok</a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="mt-10 text-center">
        <small className="text-slate-400">
          Copyright &copy; 2023 | All Rigth Reserved.
        </small>
      </footer>
    </div>
  );
};

export default Footer;
