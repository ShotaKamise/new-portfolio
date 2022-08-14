import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const travelURL: string = "/travels";

export type Menu = {
  menuName: string;
  path: string;
};

interface Props {
  menues: Menu[];
}

const SideMenu: NextPage<Props> = ({ menues }) => {
  const router = useRouter();

  const isPageActive = (pagePath: string): boolean => {
    return travelURL + pagePath === String(router.route);
  };

  return (
    <div className="h-full">
      <aside className="w-64 h-full" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-8 bg-side-bar h-full">
          <ul className="block mt-4 lg:inline-block lg:mt-0 space-y-12 text-xl font-light h-full">
            {menues.map((menu) => (
              <li key={menu.path}>
                <Link href={`${travelURL}${menu.path}`}>
                  {isPageActive(menu.path) ? (
                    <a className="text-hover-text font-['K2D-Bold']">
                      &#9654; {menu.menuName}
                    </a>
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
  );
};

export default SideMenu;
