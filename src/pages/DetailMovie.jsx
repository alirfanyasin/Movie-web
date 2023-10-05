import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import Rating from "../components/elements/Rating";
import { Link, useParams } from "react-router-dom";
import api from "../config/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailMovie = ({ title }) => {
  localStorage.setItem("title", title);

  const [dataDetail, setDataDetail] = useState([]);
  const [video, setvideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getDetailMovie = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      api.options
    )
      .then((resMovie) => {
        if (!resMovie.ok) {
          throw new Error("Network response was error");
        }
        return resMovie.json();
      })
      .then((dataMovie) => {
        setDataDetail(dataMovie);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getVideoMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      api.options
    )
      .then((resVideo) => {
        if (!resVideo.ok) {
          throw new Error("Network response was error");
        }
        return resVideo.json();
      })
      .then((dataVideo) => {
        setvideo(dataVideo);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDetailMovie();
    getVideoMovie();
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  const rating = Math.floor(dataDetail.vote_average);

  return (
    <Layout>
      {isLoading ? (
        <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
          <Skeleton
            count={1}
            className="md:h-96 md:w-full min-[360px]:h-52 min-[360px]:w-full"
          />
        </SkeletonTheme>
      ) : (
        <div className="overflow-hidden w-100 h-96">
          <img
            src={
              `https://image.tmdb.org/t/p/original/` + dataDetail.backdrop_path
            }
            alt=""
          />
        </div>
      )}

      <div className="md:px-20 min-[360px]:px-5 md:my-10 min-[360px]:-mt-36">
        <div className="flex md:gap-10">
          <div className="overflow-hidden md:w-3/12">
            {isLoading ? (
              <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                <Skeleton count={1} height="470px" width="100%" />
              </SkeletonTheme>
            ) : (
              <img
                src={
                  `https://image.tmdb.org/t/p/original/` +
                  dataDetail.poster_path
                }
                alt=""
                className="rounded-xl min-[360px]:hidden"
              />
            )}
          </div>

          <div className="container text-white md:w-9/12">
            {isLoading ? (
              <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                <Skeleton count={1} height="50px" width="50%" />
              </SkeletonTheme>
            ) : (
              <h1 className="text-3xl font-semibold ">{dataDetail.title}</h1>
            )}
            {isLoading ? (
              <div className="mt-4">
                <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                  <Skeleton count={1} height="40px" width="100%" />
                </SkeletonTheme>
              </div>
            ) : (
              <p className="mt-4 font-light text-slate-300">
                {dataDetail.overview}
              </p>
            )}

            {isLoading ? (
              <div className="mt-4">
                <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                  <Skeleton
                    count={5}
                    height="20px"
                    className="mt-4"
                    width="100%"
                  />
                </SkeletonTheme>
              </div>
            ) : (
              <div>
                <p className="mt-4 text-slate-400">"{dataDetail.tagline}"</p>
                <div className="container flex mt-4 text-slate-400">
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
                <div className="container flex mt-4">
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
            )}

            {isLoading ? (
              <div className="mt-4">
                <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                  <Skeleton count={1} height="48px" width="192px" />
                </SkeletonTheme>
              </div>
            ) : (
              <Link
                to={`https:/www.youtube.com/watch?v=` + video.key}
                target="_blank"
                className="flex items-center justify-center w-48 h-12 mt-5 mb-5 font-semibold text-black bg-yellow-500 rounded-lg"
              >
                Watch Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
