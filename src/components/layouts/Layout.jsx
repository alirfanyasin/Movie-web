import React from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
