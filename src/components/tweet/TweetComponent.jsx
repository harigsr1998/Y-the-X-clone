import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import TweetFooter from "./TweetFooter";
import TweetHeader from "./TweetHeader";
import TweetHeaderActions from "./TweetHeaderActions";
import TweetRepostHeader from "./TweetRepostHeader";
import TweetImage from "./TweetImage";

const TweetComponent = ({ id, tweet }) => {
  return (
    tweet && (
      <div className="border-y px-3 pb-3 pt-2">
        {tweet.repost.repostFlag && (
          <TweetRepostHeader repost={tweet.repost.user} />
        )}
        <Link href="/individualtweet" className="flex gap-2">
          <div className="shrink-0 grow-0">
            <CgProfile className="size-9" />
          </div>
          <div className="flex grow-0 flex-col gap-1">
            <div className="flex justify-between gap-1">
              <TweetHeader tweetBy={tweet.tweetBy} />
              <TweetHeaderActions adFlag={tweet.adFlag} />
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              alias? Aperiam iste molestiae voluptas nam magni commodi sapiente
              atque magnam cupiditate qui nisi architecto dolor odio, animi
              soluta. Reiciendis, reprehenderit?
            </div>
            {tweet.tweetContent.imageFlag && <TweetImage id={id} />}
            <TweetFooter />
          </div>
        </Link>
      </div>
    )
  );
};

export default TweetComponent;
