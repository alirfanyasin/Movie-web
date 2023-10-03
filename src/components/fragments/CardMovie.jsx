import React, { useEffect, useState } from "react";
import Card from "../elements/Card";
import { Skeleton } from "@mui/material";
import api from "../../config/api";

const CardMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <div className="px-20">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">Populars</h1>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {loading
          ? dataMovie.map((item, i) => {
              if (i <= 4) {
                return (
                  <Card key={item.id}>
                    <a href={item.id} className="relative w-full h-full group">
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
                    </a>
                  </Card>
                );
              }
            })
          : dataMovie.map(() => {
              return (
                <div>
                  <Skeleton
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    variant="rounded"
                    width={260}
                    height={380}
                  />
                  <div className="mt-2">
                    <Skeleton
                      animation="wave"
                      sx={{ bgcolor: "grey.900" }}
                      variant="rounded"
                      width={260}
                      height={20}
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default CardMovie;
