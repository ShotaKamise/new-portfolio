import TravelPageBase from "./TravelPageBase";
import Image from "next/image";

const Usa = () => {
  return (
    <>
      <TravelPageBase>
        <div className="m-8 grid grid-cols-12">
          <div className="col-span-3 col-start-1">
            <p className="text-3xl leading-relaxed">
              July, 2010.
              <br /> I drove across the USA from LA to NY, <br />
              and this travel motivated me to travel all around the world.
            </p>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide relative col-span-9 col-start-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active float-left w-full">
                <Image
                  src="/homeImage.png"
                  className="block w-full"
                  alt="Wild Landscape"
                  layout="fill"
                />
              </div>
              <div className="carousel-item float-left w-full">
                <Image
                  src="/homeImage.png"
                  className="block w-full"
                  alt="Camera"
                  layout="fill"
                />
              </div>
              <div className="carousel-item float-left w-full">
                <Image
                  src="/homeImage.png"
                  className="block w-full"
                  alt="Exotic Fruits"
                  layout="fill"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </TravelPageBase>
    </>
  );
};

export default Usa;
