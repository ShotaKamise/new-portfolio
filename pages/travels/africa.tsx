/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { africaImages } from "../../resources/travels/africa";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = africaImages;

const Africa = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-screen">
          <div className="pl-8 col-span-3 col-start-1">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              July 2013 <br /> Morocco was the only country I have visited in
              Africa.
              <br />
              Traveled Sahara desert, rode a camel, these experiences were
              unforgettable.
              <br />
              And the sunset on desert was the most beautiful sunset I have ever
              seen.
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default Africa;
