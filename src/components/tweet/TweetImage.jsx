import Image from "next/image";

const TweetImage = () => {
  return (
    <div className="h-48 w-full overflow-hidden rounded-xl">
      <Image
        src="https://picsum.photos/1080/1920"
        width={1080}
        height={1920}
        className="w-full"
      />
    </div>
  );
};

export default TweetImage;
