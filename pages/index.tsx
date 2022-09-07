/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import IndexTitle from "../components/indexTitle";
import { Career, getSortedCareersData } from "./lib/careers";
import { dateFormatter } from "./lib/dateFormatter";
import WorldMap from "../public/world-map.svg";
import SkillsAndTools from "../components/skillsAndTools";
import Mail from "../public/mail.svg";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const allCareers: Array<Career> = await getSortedCareersData();

  allCareers.sort((n1: Career, n2: Career) => {
    if (n1.id > n2.id) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      careers: await Promise.all(allCareers),
    },
  };
};

const Home: NextPage = ({
  careers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Shota&apos;s Portfolio</title>
      </Head>
      <main className="bg-main-blue">
        <div id="top" className="w-full h-4/5">
          <img src="/homeImage.png" alt="homeImage" className="w-full" />
        </div>
        <IndexTitle id="aboutMe" title="Who am I ?" />
        <div className="m-8 grid grid-cols-12 items-center">
          <div className="col-span-4 col-start-2">
            <h1 className="text-sub-yellow text-5xl">Hello</h1>
            <h2 className="text-5xl my-4">I&apos;m</h2>
            <h1 className="text-7xl">Shota</h1>
          </div>
          <div className="col-span-7 col-start-6">
            <p className="ml-5 font-bold text-3xl">A web engineer</p>
            <ul className="list-disc text-xl ml-12 mt-2 font-['K2D-thin']">
              <li>started a career as web engineer in 2020</li>
              <li>have experience of both backend and frontend.</li>
            </ul>
            <p className="mt-4 ml-5 font-bold text-3xl">A traveler</p>
            <ul className="list-disc text-xl ml-12 mt-2 font-['K2D-thin']">
              <li>traveled around the world.</li>
              <li>crossed America.</li>
              <li>have been to more than 30 countries.</li>
            </ul>
            <p className="mt-7 ml-5 font-bold text-3xl">A Japanese</p>
            <ul className="list-disc text-xl ml-12 mt-2 font-['K2D-thin']">
              <li>was born in 1990.</li>
              <li>can speak Japanse and English.</li>
              <li>am interested in living abroad.</li>
            </ul>
          </div>
        </div>
        <IndexTitle id="skillsAndTools" title="Skills and Tools" />
        <div>
          <SkillsAndTools />
        </div>
        <IndexTitle id="careers" title="Careers" />
        <div className="m-8">
          {careers.map((career: Career) => (
            <div
              key={career.id}
              className="my-6 max-w-sm w-full lg:max-w-full lg:flex justify-center"
            >
              <div className="py-4 bg-main-blue rounded-lg w-4/5 flex items-center leading-normal border-2">
                <div className="mx-6 text-xl  rounded justify-center text-center font-['Norican']">
                  {career.count} Career
                </div>
                <div className="box">
                  <p className="text-sm ">{`From ${dateFormatter(
                    career.startDate
                  )} to ${dateFormatter(career.endDate)}`}</p>
                  <div className="font-bold text-2xl">{career.companyName}</div>
                  <p className="mb-3">{career.position}</p>
                  <p className="text-sm flex items-center">
                    Used languages and Tools
                  </p>
                  <div
                    className="text-xl"
                    dangerouslySetInnerHTML={{
                      __html: career.description,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <IndexTitle id="travels" title="Travels" />
        <div className="m-8 grid grid-cols-12 items-center">
          <div className="col-span-4 col-start-2">
            <h1 className="text-5xl">Traveled</h1>
            <h2 className="text-5xl my-4 text-sub-yellow">All around</h2>
            <h1 className="text-5xl">The</h1>
            <h1 className="text-7xl">World</h1>
            <WorldMap className="h-30 w-30 fill-main-white" />
          </div>
          <div className="col-span-7 col-start-6">
            <p className="ml-5 font-bold text-3xl">Asia : </p>
            <p className="ml-8">
              Taiwan China HongKong Macau Vietnam Laos Thailand Cambodia
              Philippines SouthKorea <br />
              India Malaysia Singapore
            </p>
            <br />
            <p className="ml-5 font-bold text-3xl">Oceania : </p>
            <p className="ml-8">Australia</p>
            <br />
            <p className="ml-5 font-bold text-3xl">SouthAmerica : </p>
            <p className="ml-8">
              Algentine Uruguay Paraguay Bolivia Brazil Peru
            </p>
            <br />
            <p className="ml-5 font-bold text-3xl">North America :</p>
            <p className="ml-8">USA Canada</p>
            <br />
            <p className="ml-5 font-bold text-3xl">Europe : </p>
            <p className="ml-8">
              UK France Italy Vatican Germany Spain Morocco Belgium Netherland
              Finland <br />
              Czech Hungary Serbia Bulgaria Turkey
            </p>
            <br />
            <p className="ml-5 font-bold text-3xl">Africa : </p>
            <p className="ml-8">Morocco</p>
            <br />
            <Link href={"/travels/usa"}>
              <a className="underline text-3xl ml-5">photos &rarr;</a>
            </Link>
          </div>
        </div>
        <IndexTitle id="contact" title="Contact" />
        <div className="grid grid-cols-12 pb-10">
          <div className="col-start-3 col-span-2">
            <Mail className="fill-main-white inline-block mr-8" />
            <p className="place-content-center text-3xl font-bold inline-block">
              E-MAIL
            </p>
          </div>
          <div className="col-start-6 col-span-4">
            <p className="inline-block text-3xl underline">
              afasdsfdsf@gads.com
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
