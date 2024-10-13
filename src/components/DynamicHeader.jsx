"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxGear } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";

const DynamicHeader = () => {
  const page = usePathname().split("/")[1];

  return (
    <div className="mx-2 flex grow justify-between">
      {page === "home" && (
        <>
          <div className="m-[10px] flex-[2] text-center text-2xl font-extrabold">
            Y
          </div>
          <div className="flex justify-between gap-4">
            <div>Upgrade</div>
            <div>...</div>
          </div>
        </>
      )}
      {(page === "search" || page === "messages") && (
        <>
          <div className="flex-[2] text-center">SearchBar</div>
          <Link
            href={page === "search" ? "/searchsettings" : "/messagesettings"}
          >
            <RxGear className="m-3 size-7" />
          </Link>
        </>
      )}
      {page === "communities" && (
        <>
          <div className="flex-[2] text-xl">Communities</div>
          <div className="flex justify-between">
            <div>
              <FiSearch className="m-3 size-7" />
            </div>
            <div>
              <TbUsersPlus className="m-3 size-7" />
            </div>
          </div>
        </>
      )}
      {page === "notifications" && (
        <>
          <div className="flex-[2]">Notifications</div>
          <div>
            <RxGear className="m-3 size-7" />
          </div>
        </>
      )}
    </div>
  );
};

export default DynamicHeader;
