import { BsDot } from "react-icons/bs";

const TweetHeader = () => {
  return (
    <div className="text- flex justify-start gap-1">
      <h3 className="text-lg font-semibold">Profilename</h3>
      <div className="font-extrabold leading-7">V</div>
      <h4 className="leading-7">@_username</h4>
      <div className="self-center leading-7">
        <BsDot />
      </div>
      <h4 className="leading-7">time</h4>
    </div>
  );
};

export default TweetHeader;
