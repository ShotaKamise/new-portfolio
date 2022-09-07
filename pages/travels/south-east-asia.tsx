/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { southEastAsiaImages } from "../../resources/travels/southEastAsia";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = southEastAsiaImages;

const SouthEastAsia = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              August 2012 <br /> My World Travel had begun from SouthEastAsia.
              <br />
              Beautiful natures, historical places.
              <br />
              Also many troubles like landslides a worst tour guide and a
              motorbike accident.
              <br />
              But thanks to those experiences, I got used to backpacker travel
              life.
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default SouthEastAsia;
