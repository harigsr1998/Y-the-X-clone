"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeLayout = ({ children }) => {
  const page = usePathname().split("/")[2];

  return (
    <div className="mt-2 flex flex-col">
      <div className="flex shrink-0 grow-0 justify-between gap-0 [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/home/foryou">
          For you{" "}
          {page === "foryou" && (
            <hr className="mx-auto h-1 w-[80%] rounded-full border-0 bg-blue-500" />
          )}
        </Link>
        <Link href="/home/following">
          Following{" "}
          {page === "following" && (
            <hr className="mx-auto h-1 w-[80%] rounded-full border-0 bg-blue-500" />
          )}
        </Link>
        <Link href="/home/jobs">
          Jobs{" "}
          {page === "jobs" && (
            <hr className="mx-auto h-1 w-[80%] rounded-full border-0 bg-blue-500" />
          )}
        </Link>
      </div>
      <div className="grow bg-black">{children}</div>
    </div>
  );
};

export default HomeLayout;
