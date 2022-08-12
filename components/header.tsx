import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-header-blue p-3">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-left ml-7 cursor-pointer">
            <Link href={"/"}>
              <Image alt="logo" src="/pageLogo.png" height={56} width={52} />
            </Link>
          </div>
          <div className="text-right text-2xl text-main-white lg:flex-grow">
            <Link href={"/"}>
              <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-7">
                Home
              </a>
            </Link>
            <Link href={"/careers"}>
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7">
                Careers
              </a>
            </Link>
            <Link href={"/travels/usa"}>
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-7">
                Travels
              </a>
            </Link>
            <Link href={"/hobbies"}>
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10">
                Hobbies
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
