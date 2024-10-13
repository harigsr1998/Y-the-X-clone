import Link from "next/link";
import "./globals.css";
import DynamicHeader from "@/components/DynamicHeader";

import { GoHome, GoMail } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { PiBellBold } from "react-icons/pi";

import { CgProfile } from "react-icons/cg";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col justify-between gap-[2px] bg-gray-500 [&>*]:bg-black">
        <div className="flex h-[52px] shrink-0 grow-0 justify-between">
          <div className="mx-4 shrink-0 grow-0">
            <CgProfile className="m-3 size-7" />
          </div>
          <DynamicHeader />
        </div>
        <div className="grow">{children}</div>
        <div className="flex shrink-0 grow-0 justify-around">
          <Link href="/home">
            <GoHome className="m-3 size-7" />
          </Link>
          <Link href="/search">
            <FiSearch className="m-3 size-7" />
          </Link>
          <Link href="/communities">
            <IoPeopleOutline className="m-3 size-7" />
          </Link>
          <Link href="/notifications">
            <PiBellBold className="m-3 size-7" />
          </Link>
          <Link href="/messages">
            <GoMail className="m-3 size-7" />
          </Link>
        </div>
      </body>
    </html>
  );
}
