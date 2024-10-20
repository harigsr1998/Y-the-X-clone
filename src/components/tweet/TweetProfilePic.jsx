import Image from "next/image";

const TweetProfilePic = ({ id }) => {
  return (
    <div className="h-9 w-9 shrink-0 grow-0 overflow-hidden rounded-full">
      <Image
        src={`/random_profile_pictures/${id}.jpg`}
        width={36}
        height={36}
        className="object-contain"
        alt={`tweet ${id} profile picture`}
      />
    </div>
  );
};

export default TweetProfilePic;
