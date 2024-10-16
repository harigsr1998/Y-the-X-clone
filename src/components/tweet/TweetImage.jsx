import Image from "next/image";

const TweetImage = ({ id }) => {
  return (
    <div className="h-48 w-full overflow-hidden rounded-xl object-contain">
      <Image
        src={`/random_tweet_pictures/${id}.jpg`}
        width={1080}
        height={1920}
        className="w-full"
        alt={`tweet ${id} image`}
      />
    </div>
  );
};

export default TweetImage;
