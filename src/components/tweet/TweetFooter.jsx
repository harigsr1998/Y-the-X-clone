"use client";

import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet, FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiBarChart2, FiShare2 } from "react-icons/fi";

const TweetFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <BiMessageRounded />
        num
      </div>
      <div className="flex items-center gap-1">
        <FaRetweet />
        num
      </div>
      <div className="flex items-center gap-1">
        <FaRegHeart />
        num
      </div>
      <div className="flex items-center gap-1">
        <FiBarChart2 />
        num
      </div>
      <div className="flex items-center gap-2">
        <div>
          <FaRegBookmark />
        </div>
        <div>
          <FiShare2 />
        </div>
      </div>
    </div>
  );
};

export default TweetFooter;
