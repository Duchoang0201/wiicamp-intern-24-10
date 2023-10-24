import React, { useState } from "react";
import FunctionNavigation from "./FunctionNavigation";
import { List } from "lucide-react";

const Navigation = () => {
  const [openList, setOpenList] = useState(true);
  const listNavi = [
    { name: "Home", href: "home" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ];
  return (
    <nav className="bg-white pt-7">
      <div className="flex flex-row items-center h-12">
        <div className="ssm:w-[0px] md:w-[445px]  hidden xl:block">
          <a href="https://flowbite.com/" className="w-full ssm:w-[0px]  px-5">
            <span className="self-center text-2xl font-bold  text-black ">
              Exclusive
            </span>
          </a>
        </div>

        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <List
              onClick={() => {
                setOpenList(!openList);
              }}
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between w-full ssm:w-full xl:w-[859px]  ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ssm:w-[0px]">
            <div className="w-[474px]">
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                  openList ? "hidden" : ""
                }`}
                id="navbar-sticky"
              >
                <ul className="absolute flex flex-col px-4 md:p-0 mt-6 font-medium border md:flex-row md:space-x-12 md:mt-0 md:border-0 sm:mt-10 rounded-md w-1/2">
                  {listNavi.map((item, index) => {
                    return (
                      <li key={index} className="md:w-[61px] w-full py-2">
                        <a
                          href={item.href}
                          className=" block px-2 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                          aria-current="page"
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-black">
            <FunctionNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
