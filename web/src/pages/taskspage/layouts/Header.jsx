import {
  CloseCircle,
  Element,
  SearchNormal1,
  Setting4,
  Sort,
} from "iconsax-react";
import { default as ProfileHeader } from "../../../layouts/Header";
import { useState } from "react";

export default function Header(props) {
  const [displayAdditionalFilters, setDisplayAdditionalFilters] =
    useState(false);

  const [searchValue, setSearchValue] = useState("");

  function changeSearchValueHandler(e) {
    setSearchValue(e.target.value);
    props.searchTaskValueMethod(e.target.value);
  }

  function clearValueHandler() {
    setSearchValue("");
    props.searchTaskValueMethod("");
  }

  return (
    <header className="xl:grid xl:grid-cols-2 xl:p-8">
      <ProfileHeader />
      <h1 className="my-8 ml-6 text-2xl font-semibold text-secondary xl:col-start-1 xl:row-start-1 xl:m-0">
        {props.title}
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
              className="block w-full rounded-[10px] border border-[#F5F5F7] bg-transparent px-7 py-[14px] focus-visible:border-2 focus-visible:border-primary focus-visible:outline-none search-cancel:appearance-none"
              placeholder="Search Task"
              value={searchValue}
              onChange={changeSearchValueHandler}
            />
            <div className="absolute inset-y-0 end-6 flex items-center ps-3">
              {!searchValue ? (
                <SearchNormal1
                  color="#8E92BC"
                  className="pointer-events-none"
                />
              ) : (
                <button onClick={clearValueHandler} type="button">
                  <CloseCircle color="#8E92BC" />
                </button>
              )}
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
                disabled={true}
              >
                <Element color="#8E92BC" />
                <span className="ml-3 text-xs font-semibold text-secondary">
                  Category
                </span>
              </button>
              <button
                type="button"
                className="flex items-center rounded-[10px] border border-[#F5F5F7] px-7 py-[14px]"
                disabled={true}
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
