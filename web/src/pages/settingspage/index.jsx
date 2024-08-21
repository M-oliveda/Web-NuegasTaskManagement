import { useState } from "react";
import UserSection from "../../layouts/UserSection";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";

export default function SettingsPage() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabElements = [
    { name: "General", id: 0, element: <Settings /> },
    { name: "Notifications", id: 1, element: <Notifications /> },
  ];

  return (
    <div>
      <div className="bg-white xl:flex xl:items-center xl:justify-between xl:p-8 [&>*:first-child]:order-1">
        <UserSection />
        <h2 className="mb-[18px] ml-8 text-2xl font-semibold text-secondary xl:m-0">
          Settings
        </h2>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="xl:m-8 xl:rounded-[10px] xl:bg-white xl:p-8">
          {/* Tab Header: */}
          <div className="border-b border-gray-100 bg-white px-6 text-center text-sm font-medium">
            <ul className="flex items-center gap-7">
              {tabElements.map((element) => (
                <li key={element.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedTabIndex(element.id)}
                  >
                    <a
                      href="#"
                      className={`inline-block rounded-t-lg border-b-2 border-transparent p-4 text-sm font-medium text-secondary-300 ${selectedTabIndex === element.id && "border-b border-b-primary"}`}
                    >
                      {element.name}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {tabElements[selectedTabIndex].element}
        </div>
      </div>
    </div>
  );
}
