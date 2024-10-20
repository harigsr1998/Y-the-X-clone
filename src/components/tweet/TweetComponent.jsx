import Link from "next/link";

import TweetHeader from "./TweetHeader";
import TweetHeaderActions from "./TweetHeaderActions";
import TweetRepostHeader from "./TweetRepostHeader";
import TweetImage from "./TweetImage";
import TweetProfilePic from "./TweetProfilePic";

import dynamic from "next/dynamic";

const TweetFooter = dynamic(import("@/components/tweet/TweetFooter"), {
  ssr: false,
});

const TweetComponent = async ({ id, tweet }) => {
  return (
    tweet && (
      <div className="border-y px-3 pb-3 pt-2">
        {tweet.repost.repostFlag && (
          <TweetRepostHeader repost={tweet.repost.user} />
        )}
        <Link href="/individualtweet" className="flex gap-2">
          <TweetProfilePic id={id} />
          <div className="flex grow-0 flex-col gap-1">
            <div className="flex justify-between gap-1">
              <TweetHeader
                tweetBy={tweet.tweetBy}
                verifiedFlag={tweet.verifiedFlag}
              />
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
