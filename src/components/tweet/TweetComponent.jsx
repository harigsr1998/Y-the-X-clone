import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import { TbDotsVertical } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import TweetFooter from "./TweetFooter";

const TweetComponent = () => {
  return (
    <Link href="/individual tweet" className="m-3 flex gap-2">
      <div className="shrink-0 grow-0">
        <CgProfile className="size-9" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="text- flex justify-start gap-1">
            <h3 className="text-lg font-semibold">Profilename</h3>
            <div className="font-extrabold leading-7">V</div>
            <h4 className="leading-7">@_username</h4>
            <div className="self-center leading-7">
              <BsDot />
            </div>
            <h4 className="leading-7">time</h4>
          </div>
          <div className="flex flex-col justify-center text-gray-500">
            <TbDotsVertical />
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
          alias? Aperiam iste molestiae voluptas nam magni commodi sapiente
          atque magnam cupiditate qui nisi architecto dolor odio, animi soluta.
          Reiciendis, reprehenderit?
        </div>
        <TweetFooter />
      </div>
    </Link>
  );
};

export default TweetComponent;
