"use client";

import React from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import useAuthStore from "@/hooks/useAuth";
import useTrans from "@/hooks/useTrans";

import FunctionNavi from "./FunctionNavi/FunctionNavi";

function Navigation() {
  const { navigationList } = useTrans();
  const router = useRouter();
  const { user: isUser } = useAuthStore();
  const isUserClass = `${
    router.pathname === "/signin" || router.pathname === "/signup"
      ? `max-w-[820px] w-full `
      : `w-full lg:max-w-[862px] ${
          isUser &&
          isUser?.name &&
          `max-w-[440px] w-full lg:max-w-[892px]  lg:w-full`
        } `
  }`;
  return (
    <div className="pb-[14px] pt-[40px] border-b border-Neutral-200">
      <div className="container flex flex-row justify-between items-center">
        <Link href="/" className="xl:max-w-[118px] max-w-[125px]  w-full  ">
          <span className="font-inter w-full text-[24px] tracking-[0.72px] not-italic  !font-bold text-black">
            Exclusive
          </span>
        </Link>

        <div className={isUserClass}>
          <div className="flex flex-row justify-end gap-4  lg:flex lg:flex-row lg:justify-between w-full">
            <ul className="hidden  lg:flex lg:flex-row lg:justify-between lg:!max-w-[367px] lg:gap-12 lg:w-full">
              {navigationList &&
                navigationList.map((item) => {
                  return (
                    <li key={item.name} className=" py-2 whitespace-nowrap">
                      <Link
                        href={`/${item.href === "" ? "" : item.href}`}
                        className={`${
                          router.asPath ===
                            `/${item.href === "" ? "" : item.href}` &&
                          "underline "
                        } decoration-Neutral-300 underline-offset-4 font-normal text-base hover:font-bold hover:duration-300`}
                        aria-current="page"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <FunctionNavi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
