import { Element, SearchNormal1, Setting4, Sort } from "iconsax-react";
import { default as ProfileHeader } from "../../../layouts/Header";
import { useState } from "react";

export default function Header() {
  const [displayAdditionalFilters, setDisplayAdditionalFilters] =
    useState(false);

  return (
    <header className="xl:grid xl:grid-cols-2 xl:p-8">
      <ProfileHeader />
      <h1 className="my-8 ml-6 text-2xl font-semibold text-secondary xl:col-start-1 xl:row-start-1 xl:m-0">
        Explore Tasks
      </h1>
      <div className="xl:col-span-2 xl:col-start-1 xl:row-start-2">
        <label htmlFor="searchTask" className="sr-only">
          Search
        </label>
        <div className="m-6 flex flex-wrap gap-6 xl:m-0 xl:mt-6">
          <div className="relative flex-grow-[.1]">
            <input
              type="search"
              id="searchTask"
              className="block w-full rounded-[10px] border border-[#F5F5F7] bg-transparent px-7 py-[14px] focus-visible:border-2 focus-visible:border-primary focus-visible:outline-none"
              placeholder="Search Task"
            />
            <div className="pointer-events-none absolute inset-y-0 end-6 flex items-center ps-3">
              <SearchNormal1 color="#8E92BC" />
            </div>
          </div>
          <button
            type="button"
            className="rounded-[10px] border border-[#F5F5F7] p-[14px]"
            onClick={() =>
              setDisplayAdditionalFilters((prevValue) => !prevValue)
            }
          >
            <Setting4 color="#8E92BC" />
          </button>
          {displayAdditionalFilters && (
            <>
              <button
                type="button"
                className="flex items-center rounded-[10px] border border-[#F5F5F7] px-7 py-[14px] xl:ml-auto"
              >
                <Element color="#8E92BC" />
                <span className="ml-3 text-xs font-semibold text-secondary">
                  Category
                </span>
              </button>
              <button
                type="button"
                className="flex items-center rounded-[10px] border border-[#F5F5F7] px-7 py-[14px]"
              >
                <Sort color="#8E92BC" />
                <span className="ml-3 text-xs font-semibold text-secondary">
                  Category
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
