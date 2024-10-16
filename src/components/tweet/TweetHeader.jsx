import { BsDot } from "react-icons/bs";

const TweetHeader = ({ tweetBy }) => {
  return (
    <div className="flex h-7 shrink grow-0 justify-start gap-1">
      <h3 className="shrink-0 text-lg font-semibold">{tweetBy.profileName}</h3>
      <div className="shrink-0 font-extrabold leading-7">V</div>
      <h4 className="w-16 overflow-hidden text-ellipsis leading-7 sm:w-auto">
        @{tweetBy.username}
      </h4>
      <div className="shrink-0 self-center leading-7">
        <BsDot />
      </div>
      <h4 className="shrink-0 leading-7">time</h4>
    </div>
  );
};

export default TweetHeader;
