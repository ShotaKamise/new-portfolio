import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Career, getSortedCareersData } from "../lib/careers";
import { dateFormatter } from "../lib/dateFormatter";

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

const Careers: NextPage = ({
  careers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>My Career</title>
      </Head>
      <main>
        <>
          {careers.map((career: Career) => (
            <div
              key={career.id}
              className="my-6 max-w-sm w-full lg:max-w-full lg:flex justify-center"
            >
              <div className="py-4 border border-gray-400 bg-white rounded w-4/5 flex items-center leading-normal shadow-lg">
                <div className="mx-6 text-xl text-gray-600 justify-center text-center font-['Norican']">
                  {career.count} Career
                </div>
                <div className="box">
                  <p className="text-sm text-gray-600">{`From ${dateFormatter(
                    career.startDate
                  )} to ${dateFormatter(career.endDate)}`}</p>
                  <div className="font-bold text-xl mb-2">
                    {career.companyName}
                  </div>
                  <p className="">{career.position}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    What I learned
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: career.description,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      </main>
    </>
  );
};

export default Careers;
