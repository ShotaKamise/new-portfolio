import { ReactNode } from "react";
import Header from "../components/header";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
