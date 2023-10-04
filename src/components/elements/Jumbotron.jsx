import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Jumbotron = () => {
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "../../../public/img/jb-1.jpg",
    "../../../public/img/jb-2.jpeg",
    "../../../public/img/jb-3.jpg",
  ];

  const properties = {
    prevArrow: (
      <button className="w-10 h-10 mx-20 text-xl text-black bg-white border-0 rounded-full bg-opacity-20">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="w-10 h-10 mx-20 text-xl text-black bg-white border-0 rounded-full bg-opacity-20">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // const indicators = (index) => <div className="indicator">{index + 1}</div>;
  // indicators={indicators} scale={1.4}

  return (
    <Fade {...properties}>
      <div className="relative each-slide">
        <div className="absolute w-screen h-full bg-gradient-to-t from-black to-transparent"></div>
        {isLoading ? (
          <SkeletonTheme baseColor="#5D616D" highlightColor="#f0f0f0">
            <Skeleton count={1} height="384px" width="100%" />
          </SkeletonTheme>
        ) : (
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className="bg-cover h-96"
          >
            <div className="flex justify-center">
              <h1 className="z-10 text-xl font-light text-white mt-80">
                "Bawa Imajinasi Anda Hidup dengan Film"
              </h1>
            </div>
          </div>
        )}
      </div>
      <div className="each-slide">
        <div className="absolute w-screen h-full bg-gradient-to-t from-black to-transparent"></div>

        <div
          style={{ backgroundImage: `url(${images[1]})` }}
          className="bg-cover h-96"
        >
          <div className="flex justify-center">
            <h1 className="z-10 text-xl font-light text-white mt-80">
              "Nikmati Petualangan Tanpa Batas di Bioskop Terdekat Anda"
            </h1>
          </div>
        </div>
      </div>
      <div className="each-slide">
        <div className="absolute w-screen h-full bg-gradient-to-t from-black to-transparent"></div>
        <div
          style={{ backgroundImage: `url(${images[2]})` }}
          className="bg-cover h-96"
        >
          <div className="flex justify-center">
            <h1 className="z-10 text-xl font-light text-white mt-80">
              "Emosi, Tawa, dan Kebahagiaan, Semua dalam Satu Ruangan"
            </h1>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Jumbotron;
