import React from "react";
import Jumbotron from "../components/elements/Jumbotron";
import CardMovie from "../components/fragments/CardMovie";
import NewsMovie from "../components/fragments/NewsMovie";
import Layout from "../components/layouts/Layout";
const Index = () => {
  return (
    <Layout>
      <Jumbotron />
      <CardMovie />
      <NewsMovie />
    </Layout>
  );
};

export default Index;
