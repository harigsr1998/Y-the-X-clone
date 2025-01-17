"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxGear } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { TbUsersPlus, TbDotsVertical } from "react-icons/tb";
import Image from "next/image";

const DynamicHeader = () => {
  const page = usePathname().split("/")[1];

  return (
    <>
      <div className="m-2 h-7 w-7 shrink-0 grow-0 self-center overflow-hidden rounded-full">
        <Image
          src={"/avatar/HG.jpg"}
          width={28}
          height={28}
          alt="User profile picture"
          className="object-contain"
        />
      </div>
      <div className="flex grow justify-between">
        {page === "home" && (
          <>
            <div className="flex-[2] text-center text-3xl font-extrabold leading-[52px]">
              Y
            </div>
            <div className="flex justify-between leading-[52px]">
              <div className="absolute right-[52px] xl:left-[18%]">Upgrade</div>
              <div>
                <TbDotsVertical className="m-3 size-7" />
              </div>
            </div>
          </>
        )}
        {page === "communities" && (
          <>
            <div className="flex-[2] px-2 text-xl leading-[52px]">
              Communities
            </div>
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
        {page !== "home" && page !== "communities" && (
          <>
            {page === "search" || page === "messages" ? (
              <div className="flex-[2] px-2 py-2">
                <input
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder={`Search ${page === "search" ? "X" : "Direct Messages"}`}
                  className="h-full w-full rounded-full bg-gray-500/30 px-3 text-gray-400"
                />
              </div>
            ) : (
              <div className="flex-[2] px-2 text-xl leading-[52px]">
                Notifications
              </div>
            )}
            <Link
              href={`${page === "search" && "/searchsettings"}
                ${page === "messages" && "/messagesettings"}
                ${page === "notifications" && "/notificationsettings"}
              `}
            >
              <RxGear className="m-3 size-7 stroke-[0.5]" />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default DynamicHeader;
