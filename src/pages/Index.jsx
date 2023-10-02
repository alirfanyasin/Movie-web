import React from "react";
import Navbar from "../components/elements/Navbar";
import Jumbotron from "../components/elements/Jumbotron";
import CardMovie from "../components/fragments/CardMovie";
import NewsMovie from "../components/fragments/NewsMovie";
const Index = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardMovie />
      <NewsMovie />
    </>
  );
};

export default Index;
