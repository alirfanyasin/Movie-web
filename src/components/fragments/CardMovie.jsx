import React, { useEffect, useState } from "react";
import Card from "../elements/Card";
import api from "../../config/api";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1", api.options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was error");
        }
        return response.json();
      })
      .then((data) => {
        setDataMovie(data.results);
        setLoading(true);
      })
      .catch((error) => {
        // Tangani kesalahan jika ada
        console.error(error);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  return (
    <div className="px-20">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">Populars</h1>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {isLoading
          ? dataMovie.map((item, i) => {
              if (i <= 4) {
                return (
                  <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
                    <Skeleton count={1} height="380px" width="100%" />
                  </SkeletonTheme>
                );
              }
            })
          : dataMovie.map((item, i) => {
              if (i <= 4) {
                return (
                  <Card key={item.id}>
                    <Link
                      to={`detail/movie/` + item.id}
                      className="relative w-full h-full group"
                    >
                      <img
                        src={
                          `https://image.tmdb.org/t/p/original/` +
                          item.poster_path
                        }
                        alt=""
                        width="260px"
                        height="380px"
                        className="w-full group-hover:scale-110 group-hover:transition"
                      />
                    </Link>
                  </Card>
                );
              }
            })}
      </div>
    </div>
  );
};

export default CardMovie;
