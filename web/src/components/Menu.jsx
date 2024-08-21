import { Book1, Category2, Setting2, UserOctagon } from "iconsax-react";
import { Link } from "react-router-dom";
import HelpCenter from "./HelpCenter";

import { default as Logo } from "../assets/img/logo.svg";

export default function Menu() {
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
  return (
    <div className="hidden border-r border-gray-100 p-8 xl:col-start-1 xl:col-end-2 xl:flex xl:flex-col xl:items-start">
      <img src={Logo} alt="Application logo." width={188} />
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
  );
}
