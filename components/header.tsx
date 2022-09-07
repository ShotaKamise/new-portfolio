import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-main-blue p-3 w-full fixed">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-left ml-7 cursor-pointer">
            <Link href={"/"}>
              <div>
                <Image alt="logo" src="/pageLogo.png" height={56} width={52} />
              </div>
            </Link>
          </div>
          <div className="text-right text-2xl text-main-white lg:flex-grow">
            {isHome ? (
              <>
                <Scroll
                  to="top"
                  smooth={true}
                  duration={600}
                  className="hover:cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7"
                >
                  Top
                </Scroll>
                <Scroll
                  to="skillsAndTools"
                  smooth={true}
                  duration={600}
                  className="hover:cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7"
                >
                  Skills&Tools
                </Scroll>
                <Scroll
                  to="careers"
                  smooth={true}
                  duration={600}
                  className="hover:cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7"
                >
                  Careers
                </Scroll>
                <Scroll
                  to="travels"
                  smooth={true}
                  duration={600}
                  className="hover:cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7"
                >
                  Travels
                </Scroll>
                <Scroll
                  to="contact"
                  smooth={true}
                  duration={600}
                  className="hover:cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7"
                >
                  Contact
                </Scroll>
              </>
            ) : (
              <>
                <Link href={"/"}>
                  <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-7">
                    &larr; Back to main page
                  </a>
                </Link>
                {/* <Link href={"/"}>
                  <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-7">
                    Careers
                  </a>
                </Link>
                <Link href={"/"}>
                  <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-7">
                    Travels
                  </a>
                </Link>
                <Link href={"/"} scroll={false}>
                  <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-7">
                    Contacts
                  </a>
                </Link> */}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
