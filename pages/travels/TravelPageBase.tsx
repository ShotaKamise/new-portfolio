import Head from "next/head";
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
      <main className="overflow-hidden">
        <div className="flex h-[calc(100vh-0.1px)] bg-main-blue pt-24">
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
