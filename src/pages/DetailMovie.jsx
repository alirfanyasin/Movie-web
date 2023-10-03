import React, { useEffect, useState } from "react";
import api from "../config/api";
import Layout from "../components/layouts/Layout";
import Rating from "../components/elements/Rating";

const DetailMovie = () => {
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/565770?language=en-US",
      api.options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was error");
        }
        return response.json();
      })
      .then((movies) => {
        setDataDetail(movies);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const rating = Math.floor(dataDetail.vote_average);

  return (
    <Layout>
      <div className="overflow-hidden w-100 h-96">
        <img
          src={
            `https://image.tmdb.org/t/p/original/` + dataDetail.backdrop_path
          }
          alt=""
        />
      </div>
      <div className="px-20 my-10">
        <div className="flex gap-10">
          <div className="w-3/12">
            <img
              src={
                `https://image.tmdb.org/t/p/original/` + dataDetail.poster_path
              }
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="w-9/12 text-white">
            <h1 className="text-3xl font-semibold">{dataDetail.title}</h1>
            <p className="mt-4 font-light text-slate-300">
              {dataDetail.overview}
            </p>
            <p className="mt-4 text-slate-400">"{dataDetail.tagline}"</p>

            <div className="flex mt-4 text-slate-400">
              {dataDetail.genres &&
                dataDetail.genres.map((item) => {
                  return (
                    <p className="" key={item.id}>
                      {item.name}
                      <span className="mx-3">|</span>
                    </p>
                  );
                })}
            </div>

            <p className="mt-4 text-slate-400">
              <span className="text-white">Release :</span>{" "}
              {dataDetail.release_date}
            </p>

            <div className="flex mt-4">
              <p className="mr-2">Production Companies : </p>
              {dataDetail.production_companies &&
                dataDetail.production_companies.map((company) => {
                  return (
                    <p className="mr-2 text-slate-400" key={company.id}>
                      {company.name},{" "}
                    </p>
                  );
                })}
            </div>

            <Rating rate={rating} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
