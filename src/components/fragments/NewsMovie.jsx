import React, { useEffect, useState } from "react";
import Card from "../elements/Card";
import api from "../../config/api";

const NewsMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      api.options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was error");
        }

        return response.json();
      })
      .then((movies) => {
        console.log(movies);
        setDataMovie(movies.results);
      })
      .catch((error) => {
        // Tangani kesalahan jika ada
        console.error(error);
      });
  }, []);

  return (
    <div className="px-20">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">Top Rated</h1>
      </header>

      <div className="grid grid-cols-8 gap-4">
        {dataMovie.map((item) => {
          return (
            <Card key={item.id}>
              <a href="" className="relative w-full h-full group">
                <img
                  src={
                    `https://image.tmdb.org/t/p/original/` + item.poster_path
                  }
                  alt={item.title}
                  width="260px"
                  height={380}
                  className="w-full group-hover:scale-110 group-hover:transition"
                />
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NewsMovie;
