/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { europeImages } from "../../resources/travels/europe";
import Australia from "./australia";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = europeImages;

const Europe = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              June 2013 <br /> Traveled many countries in Europe.
              <br />
              It is hard to decide which place is the best.
              <br />
              I wish I could have traveled more.
              <br />
              Never to be bored to travel european countries.
              <br />
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default Europe;
