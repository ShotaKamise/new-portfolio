/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { usaImages } from "../../resources/travels/usa";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = usaImages;

const Usa = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              July 2010 <br /> Drove across the USA from LA to NY. <br />
              This journey motivated me to travel all around the world.
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default Usa;
