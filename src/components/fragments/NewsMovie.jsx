import React from "react";
import Card from "../elements/Card";

const NewsMovie = () => {
  const dataMovie = [
    {
      id: 1,
      title: "Freedom",
      image: "/public/img/img-6.jpg",
    },
    {
      id: 2,
      title: "Archer",
      image: "/public/img/img-7.jpeg",
    },
    {
      id: 3,
      title: "After",
      image: "/public/img/img-8.jpg",
    },
    {
      id: 4,
      title: "Avengers Infinity War",
      image: "/public/img/img-9.jpg",
    },
    {
      id: 5,
      title: "Black Panther 2",
      image: "/public/img/img-10.jpg",
    },
    {
      id: 6,
      title: "Black Panther 2",
      image: "/public/img/img-11.jpg",
    },
    {
      id: 7,
      title: "Black Panther 2",
      image: "/public/img/img-12.jpg",
    },
    {
      id: 8,
      title: "Black Panther 2",
      image: "/public/img/img-13.jpg",
    },
    {
      id: 9,
      title: "Black Panther 2",
      image: "/public/img/img-14.jpg",
    },
    {
      id: 10,
      title: "Black Panther 2",
      image: "/public/img/img-15.jpg",
    },
    {
      id: 11,
      title: "Black Panther 2",
      image: "/public/img/img-16.jpg",
    },
    {
      id: 12,
      title: "Black Panther 2",
      image: "/public/img/img-17.jpeg",
    },
    {
      id: 13,
      title: "Black Panther 2",
      image: "/public/img/img-18.jpg",
    },
    {
      id: 14,
      title: "Black Panther 2",
      image: "/public/img/img-19.jpg",
    },
    {
      id: 15,
      title: "Black Panther 2",
      image: "/public/img/img-20.jpg",
    },
  ];
  return (
    <div className="px-20">
      <header className="my-8">
        <h1 className="text-2xl font-semibold text-white">News Movie</h1>
      </header>

      <div className="grid grid-cols-8 gap-4">
        {dataMovie.map((item) => {
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
        })}
      </div>
    </div>
  );
};

export default NewsMovie;
