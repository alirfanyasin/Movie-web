import React from "react";

const Button = ({ children, classname, clickedLoad }) => {
  return (
    <button
      className={`w-44 h-10 flex justify-center items-center rounded-xl ${classname}`}
      onClick={() => clickedLoad()}
    >
      {children}
    </button>
  );
};

export default Button;
