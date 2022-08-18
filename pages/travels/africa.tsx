/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { africaImages } from "../../resources/travels/africa";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = africaImages;

const Africa = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              July 2013 <br /> Morocco was the only country I visited in Africa.
              <br />
              Traveled Sahara desert by riding a camel, looked exactly my image
              of desert.
              <br />
              Also the sunset on desert was the most beautiful sunset I have
              ever seen.
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default Africa;
