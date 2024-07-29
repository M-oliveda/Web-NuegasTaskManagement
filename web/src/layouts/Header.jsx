import { HambergerMenu, Notification, Profile } from "iconsax-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(
    user ? false : true,
  );

  useEffect(() => {
    setIsUserInfoLoading(user ? false : true);
  }, [user]);

  return (
    <header className="flex items-center justify-between px-6 py-8">
      {isUserInfoLoading ? (
        <span className="border-primary-300 text-primary-300 h-11 w-11 animate-pulse rounded-full border p-[10px]">
          <HambergerMenu size={24} />
        </span>
      ) : (
        <span className="text-secondary-300 h-11 w-11 rounded-full border border-[#F5F5F7] p-[10px]">
          <HambergerMenu size={24} />
        </span>
      )}
      <div className="flex gap-4">
        {isUserInfoLoading ? (
          <span className="border-primary-300 text-primary-300 h-11 w-11 animate-pulse rounded-full border p-[10px]">
            <Notification size={24} />
          </span>
        ) : (
          <span className="text-secondary-300 h-11 w-11 rounded-full border border-[#F5F5F7] p-[10px]">
            <Notification size={24} />
          </span>
        )}
        {isUserInfoLoading ? (
          <span className="border-primary-300 text-primary-300 h-11 w-11 animate-pulse rounded-full p-[10px]">
            <Profile size={24} />
          </span>
        ) : (
          <span className="h-11 w-11 rounded-full">
            <img src={user.avatar} className="rounded-full" />
          </span>
        )}
      </div>
    </header>
  );
}
