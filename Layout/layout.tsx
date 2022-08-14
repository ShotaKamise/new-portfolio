import { ReactNode } from "react";
import Header from "../components/header";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="h-[calc(100%_-_66px)]">{children}</div>
    </>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
