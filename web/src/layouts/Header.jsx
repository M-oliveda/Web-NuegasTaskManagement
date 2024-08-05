import { HambergerMenu, Notification, Profile } from "iconsax-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(
    user ? false : true,
  );

  const [screenSize, setSreenSize] = useState(
    window.matchMedia("(min-width: 1280px)"),
  );

  useEffect(() => {
    setIsUserInfoLoading(user ? false : true);
  }, [user]);

  return (
    <header className="flex items-center justify-between px-6 py-8 xl:px-0 xl:py-0">
      <button type="button" className="xl:hidden">
        <span
          className={`block h-11 w-11 rounded-full border p-[10px] ${isUserInfoLoading ? "animate-pulse border-primary-300 text-primary-300" : "border-[#F5F5F7] text-secondary-300"}`}
        >
          <HambergerMenu size={24} />
        </span>
      </button>
      <div className="hidden xl:block">
        {isUserInfoLoading ? (
          <>
            <span className="mb-2 block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
            <span className="block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
          </>
        ) : (
          <>
            <p className="text-2xl font-semibold text-secondary">
              Hi, {user.firstname} {user.lastname}
            </p>
            <p className="font-medium text-secondary-400">
              Let's finish your task today!
            </p>
          </>
        )}
      </div>
      <div className="flex gap-4">
        <button type="button">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full border p-[10px] xl:h-[48px] xl:w-[48px] xl:p-[16px] ${isUserInfoLoading ? "animate-pulse border-primary-300 text-primary-300" : "border-[#F5F5F7] text-secondary-300"}`}
          >
            <Notification size={24} className="shrink-0" />
          </span>
        </button>
        <button type="button">
          <span
            className={`block h-11 w-11 rounded-full border xl:h-[48px] xl:w-[48px] ${isUserInfoLoading ? "flex animate-pulse items-center justify-center border-primary-300 p-[10px] text-primary-300 xl:p-[16px]" : "border-[#F5F5F7] text-secondary-300"}`}
          >
            {isUserInfoLoading ? (
              <Profile size={24} className="shrink-0" />
            ) : (
              <span className="overflow-hidden">
                <img src={user.avatar} className="rounded-full" />
              </span>
            )}
          </span>
        </button>
      </div>
    </header>
  );
}
