import React from "react";

const Card = ({ children }) => {
  return (
    <div className="mb-4 overflow-hidden shadow-xl shadow-slate-800">
      {children}
    </div>
  );
};

export default Card;
