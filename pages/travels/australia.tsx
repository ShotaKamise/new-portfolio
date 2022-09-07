/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { australiaImages } from "../../resources/travels/australia";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = australiaImages;

const Australia = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              January 2013 <br /> Australia was so adventurous.
              <br />
              A lot of animals, big natures, I traveled from northern part to
              southern part and east coast too.
              <br />
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default Australia;
