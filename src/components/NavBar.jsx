"use client";

import Link from "next/link";

import { GoMail } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TbUsers, TbSmartHome, TbBell } from "react-icons/tb";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const page = usePathname().split("/")[1];
  return (
    <>
      <Link href="/">
        <TbSmartHome
          className={`m-3 size-7 ${page === "home" && "fill-current"}`}
        />
      </Link>
      <Link href="/search">
        <FiSearch
          className={`m-3 size-7 ${page === "search" && "stroke-[3]"}`}
        />
      </Link>
      <Link href="/communities">
        <TbUsers
          className={`m-3 size-7 stroke-2 ${page === "communities" && "fill-current"}`}
        />
      </Link>
      <Link href="/notifications">
        <TbBell
          className={`m-3 size-7 ${page === "notifications" && "fill-current"}`}
        />
      </Link>
      <Link href="/messages">
        <GoMail
          className={`m-3 size-7 ${page === "messages" && "stroke-[1.5]"}`}
        />
      </Link>
    </>
  );
};

export default NavBar;
