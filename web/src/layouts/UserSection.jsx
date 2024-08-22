import { HambergerMenu, Notification, Profile } from "iconsax-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { GlobalContext } from "../context/GlobalContext";

export default function UserSection() {
  const { user } = useContext(UserContext);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(
    user ? false : true,
  );
  const { appMenuRef } = useContext(GlobalContext);

  const [screenSize, setSreenSize] = useState(
    window.matchMedia("(min-width: 1280px)"),
  );

  useEffect(() => {
    setIsUserInfoLoading(user ? false : true);
  }, [user]);

  function openAppMenuHandler(e) {
    appMenuRef.current.style.width = "100%";
    appMenuRef.current.style.padding = "32px";
    appMenuRef.current.style.backgroundColor = "#FFFFFF";
  }

  return (
    <header className="flex items-center justify-between px-6 py-8 xl:justify-self-end xl:px-0 xl:py-0">
      <button type="button" className="xl:hidden" onClick={openAppMenuHandler}>
        <span
          className={`block h-11 w-11 rounded-full border p-[10px] ${isUserInfoLoading ? "animate-pulse border-primary-300 text-primary-300" : "border-[#F5F5F7] text-secondary-300"}`}
        >
          <HambergerMenu size={24} />
        </span>
      </button>
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
