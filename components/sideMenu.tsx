import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "../resources/travels/menues";

const travelURL: string = "/travels";

interface Props {
  menues: Menu[];
}

const SideMenu: NextPage<Props> = ({ menues }) => {
  const router = useRouter();

  const isPageActive = (pagePath: string): boolean => {
    return travelURL + pagePath === String(router.route);
  };

  return (
    <>
      <div>
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto h-screen py-4 px-8 bg-side-bar">
            <ul className="block mt-4 lg:inline-block lg:mt-0 space-y-12 text-xl font-light">
              {menues.map((menu) => (
                <li key={menu.path}>
                  <Link href={`${travelURL}${menu.path}`}>
                    {isPageActive(menu.path) ? (
                      <a className="text-hover-text">&#9654; {menu.menuName}</a>
                    ) : (
                      <a className="text-main-white hover:text-hover-text">
                        {menu.menuName}
                      </a>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideMenu;
