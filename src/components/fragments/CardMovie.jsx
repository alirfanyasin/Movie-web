import React, { useEffect, useState } from "react";
import Card from "../elements/Card";
import { Skeleton } from "@mui/material";
import { data } from "autoprefixer";

const CardMovie = () => {
  const dataMovie = [
    {
      id: 1,
      title: "Freedom",
      image: "/public/img/img-1.jpg",
    },
    {
      id: 2,
      title: "Archer",
      image: "/public/img/img-2.jpg",
    },
    {
      id: 3,
      title: "After",
      image: "/public/img/img-3.jpg",
    },
    {
      id: 4,
      title: "Avengers Infinity War",
      image: "/public/img/img-4.jpg",
    },
    {
      id: 5,
      title: "Black Panther 2",
      image: "/public/img/img-5.jpg",
    },
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <div className="px-20">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">Populars</h1>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {loading
          ? dataMovie.map((item) => {
              return (
                <Card key={item.id}>
                  <a href="" className="relative w-full h-full group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full group-hover:scale-110 group-hover:transition"
                    />
                  </a>
                </Card>
              );
            })
          : dataMovie.map((skeleton) => {
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
