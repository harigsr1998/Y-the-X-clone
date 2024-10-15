import Link from "next/link";
import { FaRetweet } from "react-icons/fa6";

const TweetRepostHeader = () => {
  return (
    <Link
      href="/individualprofile"
      className="mx-6 flex items-center gap-1 pb-1 text-gray-400"
    >
      <FaRetweet />
      Username reposted
    </Link>
  );
};

export default TweetRepostHeader;
