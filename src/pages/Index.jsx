import React from "react";
import Navbar from "../components/elements/Navbar";
import Jumbotron from "../components/elements/Jumbotron";
import CardMovie from "../components/fragments/CardMovie";
import NewsMovie from "../components/fragments/NewsMovie";
import Footer from "../components/elements/Footer";
const Index = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardMovie />
      <NewsMovie />
      <Footer />
    </>
  );
};

export default Index;
