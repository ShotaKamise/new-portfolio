/* eslint-disable @next/next/no-img-element */

import { NextPage } from "next";
import { s3URL } from "../resources/s3Settings";

export type CarouselImage = {
  number: number;
  imagePath: string;
};

interface Props {
  images: CarouselImage[];
}

const Carousel: NextPage<Props> = ({ images }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="p-8 carousel slide relative col-span-9 col-start-4 h-[calc(100vh-85.5px)]"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute inset-x-1 bottom-12 items-center flex justify-center h-auto">
        {images.map((image) => {
          const slideTo = (image.number - 1).toString();
          return image.number == 1 ? (
            <button
              key={slideTo}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ) : (
            <button
              key={slideTo}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={slideTo}
              aria-label={`Slide ${image.number}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner relative overflow-hidden h-full">
        {images.map((image) =>
          image.number == 1 ? (
            <div
              className="carousel-item active relative float-left"
              key={image.number}
            >
              <img
                src={`${s3URL}${image.imagePath}`}
                className="block object-cover"
                alt="..."
              />
            </div>
          ) : (
            <div
              className="carousel-item relative float-left ease-in-out"
              key={image.number}
            >
              <img
                src={`${s3URL}${image.imagePath}`}
                className="block w-full object-cover"
                alt="..."
              />
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
