/* eslint-disable @next/next/no-img-element */
import Carousel, { CarouselImage } from "../../components/carousel";
import { southAmericaImages } from "../../resources/travels/southAmerica";
import TravelPageBase from "./TravelPageBase";

const images: CarouselImage[] = southAmericaImages;

const SouthAmerica = () => {
  return (
    <>
      <TravelPageBase>
        <div className="grid grid-cols-12 h-full">
          <div className="pt-8 pl-8 col-span-3 col-start-1 h-[calc(100vh-85.5px)]">
            <p className="text-2xl leading-loose font-['K2D-Light']">
              Feburary 2013 <br /> My favorite place of the world is definetely
              Uyuni lake.
              <br />
              The scenery right in front of me was hard to believe.
              <br />
              Eventhough the scenery was perfect, south america was the most
              unsafe place of my travel.
            </p>
          </div>

          <Carousel images={images} />
        </div>
      </TravelPageBase>
    </>
  );
};

export default SouthAmerica;
