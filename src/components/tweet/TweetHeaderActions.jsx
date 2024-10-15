import { TbDotsVertical } from "react-icons/tb";

const TweetHeaderActions = ({ adFlag }) => {
  return (
    <div className="flex items-center text-gray-500">
      {adFlag && (
        <div className="rounded-md bg-gray-500/30 px-2 text-gray-400">Ad</div>
      )}
      <TbDotsVertical />
    </div>
  );
};

export default TweetHeaderActions;
