import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import api from "../../config/api";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" +
        currentPage,
      api.options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was error");
        }

        return response.json();
      })
      .then((movies) => {
        const uniqueMovies = new Set([...dataMovie, ...movies.results]);
        const uniqueMoviesArray = Array.from(uniqueMovies);
        setDataMovie(uniqueMoviesArray);
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1500);
  }, [currentPage]);

  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="md:px-20 min-[360px]:px-5">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">Top Rated</h1>
      </header>

      <div className="grid md:grid-cols-8 md:gap-4 min-[360px]:gap-2 min-[360px]:grid-cols-4">
        {isLoading
          ? dataMovie.map((item, i) => {
              return (
                <SkeletonTheme
                  baseColor="#5D616D"
                  highlightColor="#f0f0f0"
                  key={i}
                >
                  <Skeleton count={1} height="240px" width="100%" />
                </SkeletonTheme>
              );
            })
          : dataMovie.map((item) => {
              return (
                <Card key={item.id}>
                  <Link
                    to={"detail/movie/" + item.id}
                    className="relative w-full h-full group"
                  >
                    <img
                      src={
                        `https://image.tmdb.org/t/p/original/` +
                        item.poster_path
                      }
                      alt={item.title}
                      width="260px"
                      height={380}
                      className="w-full group-hover:scale-110 group-hover:transition"
                    />
                  </Link>
                </Card>
              );
            })}
      </div>
      <div className="flex justify-center">
        <Button
          classname="my-5 font-semibold text-black bg-yellow-500"
          clickedLoad={loadMoreData}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default NewsMovie;
