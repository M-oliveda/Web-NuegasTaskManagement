import {
  Book1,
  Category2,
  CloseCircle,
  Setting2,
  UserOctagon,
} from "iconsax-react";
import { Link } from "react-router-dom";
import HelpCenter from "./HelpCenter";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { default as Logo } from "../assets/img/logo.svg";

export default function Menu() {
  const { appMenuRef } = useContext(GlobalContext);

  const navItems = [
    {
      name: "Overview",
      link: "/dashboard",
      icon: <Category2 color="#8E92BC" />,
    },
    {
      name: "Tasks",
      link: "/tasks",
      icon: <Book1 color="#8E92BC" />,
    },
    {
      name: "Mentors",
      link: "/mentors",
      icon: <UserOctagon color="#8E92BC" />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <Setting2 color="#8E92BC" />,
    },
  ];

  function minimizeMenuHandler() {
    appMenuRef.current.style.width = 0;
    appMenuRef.current.style.padding = 0;
    appMenuRef.current.style.backgroundColor = "transparent";
  }

  return (
    <div>
      <div
        className="fixed left-0 top-0 z-10 flex h-full w-0 max-w-[252px] flex-col overflow-hidden border-r border-gray-100 bg-transparent p-0 duration-500 xl:col-start-1 xl:col-end-2 xl:w-auto xl:max-w-full xl:items-start xl:bg-white xl:p-6"
        ref={appMenuRef}
      >
        <div>
          <img src={Logo} alt="Application logo." width={188} />
          <button
            type="button"
            className="xl:hidden"
            onClick={minimizeMenuHandler}
          >
            <CloseCircle color="#8E92BC" />
          </button>
        </div>
        <nav>
          <ul className="mt-16 space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className="flex items-center gap-3 hover:opacity-70"
                >
                  {item.icon}
                  <span className="text-sm font-semibold text-secondary-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <HelpCenter />
      </div>
    </div>
  );
}
