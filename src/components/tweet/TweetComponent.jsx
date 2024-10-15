import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import TweetFooter from "./TweetFooter";
import TweetHeader from "./TweetHeader";
import TweetHeaderActions from "./TweetHeaderActions";
import TweetRepostHeader from "./TweetRepostHeader";
import TweetImage from "./TweetImage";

const TweetComponent = () => {
  const repostFlag = true;
  const imageFlag = true;

  return (
    <div className="border-y px-3 pb-3 pt-2">
      {repostFlag && <TweetRepostHeader />}
      <Link href="/individualtweet" className="flex gap-2">
        <div className="shrink-0 grow-0">
          <CgProfile className="size-9" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <TweetHeader />
            <TweetHeaderActions adFlag={true} />
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            alias? Aperiam iste molestiae voluptas nam magni commodi sapiente
            atque magnam cupiditate qui nisi architecto dolor odio, animi
            soluta. Reiciendis, reprehenderit?
          </div>
          {imageFlag && <TweetImage />}
          <TweetFooter />
        </div>
      </Link>
    </div>
  );
};

export default TweetComponent;
