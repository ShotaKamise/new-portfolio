/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shota&apos;s Portfolio</title>
      </Head>
      <main>
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-1 m-14">
            <h1 className="ml-5 text-5xl">Hi I&apos;m Shota</h1>
            <p className="mt-7 ml-5 font-bold text-3xl">A web engineer</p>
            <ul className="list-disc text-2xl ml-12 mt-2">
              <li>started a career as web engineer in 2020</li>
              <li>have experience of both backend and frontend.</li>
              <li>skilled in Java, Javascript, React.js, Next.js, etc...</li>
            </ul>
            <p className="mt-7 ml-5 font-bold text-3xl">A traveler</p>
            <ul className="list-disc text-2xl ml-12 mt-2">
              <li>traveled around the world.</li>
              <li>have been to more than 30 countries.</li>
            </ul>
          </div>
          <div className="col-start-5 col-span-8">
            <img src="/homeImage.png" alt="homeImage" className="w-full" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
