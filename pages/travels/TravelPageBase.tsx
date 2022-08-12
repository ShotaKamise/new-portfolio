import { NextPage } from "next";
import Head from "next/head";
import { type } from "os";
import { ReactNode } from "react";
import SideMenu from "../../components/sideMenu";
import { travelMenues } from "../../resources/travels/menues";

const TravelPageBase = ({ children }: Props) => {
  const travelMenus = travelMenues;
  return (
    <>
      <Head>
        <title>My Travel</title>
      </Head>
      <main>
        <div className="flex">
          <SideMenu menues={travelMenus} />
          {children}
        </div>
      </main>
    </>
  );
};

type Props = {
  children?: ReactNode;
};

export default TravelPageBase;
